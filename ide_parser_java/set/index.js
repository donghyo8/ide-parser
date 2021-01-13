const rw = require("./fileRW");
const reservedWords = require("./reservedWords");
const operations = require("./operations");
const types = require("./types");
const id = /[a-zA-z]\w*/g;
const splitAt = index => x => [x.slice(0, index), x.slice(index)];

module.exports = path => new Promise((resolve, reject) => {
  rw.getFileContent(path, str => {

    /* (각 token type 교체를 위한 Table 선언)
    allTokens => (최종 Token 정보 Table)
    new_allTokenTable => (allToken의 비교를 위한 Table)
    lineTable => ('\n' 탐색을 위한 개별 Token Table)
    escapeTable => ('\n' 탐색을 위한 Table)
    variableTable => (VARIABLE_NAME 탐색을 위한 Table)
    classTable => (CLASS_NAME 탐색을 위한 Table)
    objectTable => (OBJECT_NAME 탐색을 위한 Table)
    */

    let allTokens = [];
    let new_allTokenTable = [];
    let lineTable = [];
    let escapeTable = [];
    let variableTable = [];
    let classTable = [];
    let objectTable = [];
    let errorTable = [];


         /*
      function lineNo(str, re) {
        return str.split(/\r?\n/).map(function (line, i) {
            return {
              content : line,
              linenumber: i + 1,
            };
        }).filter(Boolean);
      };
          lines = lineNo(str, id);
          
          console.log(lines)
      */

    // token index 및 '\n' index 탐색
    function charIndex(str, re) {
      return str.split("").map(function (line, i) {
        return {
          token: line,
          charindex: i,
        };

      }).filter(Boolean);
    };
    
    lineTable = charIndex(str, id);


    for (let i = 0; i < lineTable.length; i++) {
      if (lineTable[i].token == "\n") {
        escapeTable.push({
          escapeindex: i
        })
      }
    }

    /* 각 모듈 내 정규식 패턴에 맞는 문자열 탐색(/set/ 디렉토리 내 type, reservedwords, operations 모듈) */
    // type 수집
    types.forEach(e => {
      while ((match = e.reg.exec(str))) {
        let matched = match[2] ? match[2].toString() : match.toString();
        console.log(match)
        let count = 0;
        while (count < escapeTable.length && escapeTable[count].escapeindex < match.index) count++;

        allTokens.push({
          line: count + 1,
          index: match.index,
          type: e.name,
          token: matched
        });

        str = splitAt(match.index)(str);
        str[1] = str[1].replace(matched, " ".repeat(matched.length));
        str = str.join("");
      }
    });

    // reservedwords 수집
    reservedWords.all.forEach(e => {
      while ((match = e.reg.exec(str))) {
        if (match[1].toString()) {
          match.index++;
        }
        let count = 0;
        while (count < escapeTable.length && escapeTable[count].escapeindex < match.index) count++;

        allTokens.push({
          line: count + 1,
          index: match.index,
          type: e.name,
          token: match[2].toString()
        });
      }
    });

    // operations 수집
    operations.forEach(e => {
      while ((match = e.reg.exec(str))) {
        let count = 0;
        while (count < escapeTable.length && escapeTable[count].escapeindex < match.index) count++;
        if (match.toString() != '\n') {
          allTokens.push({
            line: count + 1,
            index: match.index,
            type: e.name,
            token: match.toString()
          });
        }
        str = str.replace(match[0], " ");
      }
    });

    /* type, reservedwords, operations 모듈 내 존재하지 않는 Token들은 Error로 교체하고 아래에서 처리 */
    // 나머지 Token 수집
    while ((match = id.exec(str))) {
      if (new RegExp(reservedWords.sum, "g").exec(match.toString()).index != 1) {
        let count = 0;
        while (count < escapeTable.length && escapeTable[count].escapeindex < match.index) count++;

        allTokens.push({
          line: count + 1,
          index: match.index,
          type: "ERROR",
          token: match[0].toString()
        });
      }
    }

    allTokens.sort((a, b) => a.index - b.index);
    new_allTokenTable = allTokens

    // 각 Table의 Token Type 교체
    for (let i = 0; i < allTokens.length; i++) {
      if (allTokens[i].type == 'ERROR') {
        if (allTokens[i - 1].type == 'DATA_TYPE') {
          if (allTokens[i + 1].type == 'LEFT_ROUND_B') {
            allTokens[i].type = 'FUNC_NAME'
          }
          else {
            allTokens[i].type = 'VARIABLE_NAME'
          }
        }
        else if (allTokens[i - 1].type == 'PUBLIC') {
          allTokens[i].type = 'CONSTRUCTOR_NAME'
        }
        else if (allTokens[i - 1].type == 'COMMA') {
          allTokens[i].type = 'VARIABLE_NAME'
        }
        else if (allTokens[i - 1].type == 'CLASS') {
          allTokens[i].type = 'CLASS_NAME'
        }
        else if (allTokens[i - 1].type == 'INTERFACE' || allTokens[i - 1].type == 'IMPLEMENTS') {
          allTokens[i].type = 'INTERFACE_NAME'
        }
        else if (allTokens[i - 1].token == '.' && allTokens[i + 1].token == '(') {
          allTokens[i].type = 'FUNC_NAME'
        }
        else if (allTokens[i + 1].type == 'ASSIGNMENT' && allTokens[i + 2].type == 'NEW') {
          allTokens[i].type = 'OBJECT_NAME'
        }
      }
      if (allTokens[i].type == 'VARIABLE_NAME') {
        variableTable.push({
          token: allTokens[i].token
        });
      }
      if (allTokens[i].type == 'CLASS_NAME') {
        classTable.push({
          token: allTokens[i].token
        });
      }
      if (allTokens[i].type == 'OBJECT_NAME') {
        objectTable.push({
          token: allTokens[i].token
        });
      }

      if (allTokens[i].type == 'PACKAGE' && allTokens[i + 1].type == 'LEFT_ROUND_B') {
        allTokens[i].type = 'SYSTEM.OUT.PRINT'
      }

      for (let j = 0; j < variableTable.length; j++) {
        if (variableTable[j].token == new_allTokenTable[i].token) {
          allTokens[i].type = 'VARIABLE_NAME'
        }
        else if (variableTable[j].token == new_allTokenTable[i].token) {
          allTokens[i].type = 'ERROR'
        }
      }
      for (let j = 0; j < classTable.length; j++) {
        if (classTable[j].token == new_allTokenTable[i].token) {
          allTokens[i].type = 'CLASS_NAME'
        }
        else if (classTable[j].token == new_allTokenTable[i].token) {
          allTokens[i].type = 'ERROR'
        }
      }
      for (let j = 0; j < objectTable.length; j++) {
        if (objectTable[j].token == new_allTokenTable[i].token) {
          allTokens[i].type = 'OBJECT_NAME'
        }
        else if (objectTable[j].token == new_allTokenTable[i].token) {
          allTokens[i].type = 'ERROR'
        }
      }
      if (allTokens[i].type == 'ERROR') {
        errorTable.push({
          line: allTokens[i].line
        });
      }
      for (let j = 0; j < errorTable.length; j++) {
        for (let i = 0; i < allTokens.length; i++)
          if (errorTable[j].line == new_allTokenTable[i].line) {
            allTokens[i].type = 'ERROR'
          }
      }
    }

    // resolve(allTokens);

    /*
    console.log("\n " + "=========================== Parsing Start (" + path.split("/")[2] + ") ===========================" + "\n")
    console.dir(allTokens, { 'maxArrayLength': null })
    console.log("\n " + "=========================== Parsing End (" + path.split("/")[2] + ") ===========================" + "\n")
    */
    /*
        // Token 결과 출력 (.txt format)   
        rw.saveFile(
          "RESULTS/" + path.split("/")[2] + "_tokens(1).txt",
          allTokens.map(e => e.type + " : " + e.token).join("\n")
        );
    */
  });
}); 