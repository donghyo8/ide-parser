const rw = require("./fileRW");
const reservedWords = require("./reservedWords");
const operations = require("./operations");
const types = require("./types");
const id = /[a-zA-z]\w*/g;

let allTokens = [];
let allTokensTable =[];
let lineTable = [];
let escapeTable = [];
let variableTable =[];
let funcTable = [];

const splitAt = index => x => [x.slice(0, index), x.slice(index)];
module.exports = path => new Promise((resolve, reject) => {rw.getFileContent(path, str => {


      // token index 및 '\n' index 탐색
        function charIndex(str, re) {  
            return str.split("").map(function (line, i) {
                return {
                  token : line,
                  charindex : i,
                };
              
            }).filter(Boolean);
          };
              lineTable = charIndex(str, id);

 
              for(var i=0; i<lineTable.length; i++){
                if(lineTable[i].token == "\n"){
                    escapeTable.push({
                      escapeindex : i
                    })
                }
              }

      // Type 수집
      types.forEach(e => {
        while ((match = e.reg.exec(str))) { // 모듈 내 정규식 패턴에 맞는 문자열 탐색
          let matched = match[2] ? match[2].toString() : match.toString();
          console.log(match)
          let count = 0;
          while(count < escapeTable.length && escapeTable[count].escapeindex < match.index) count++;
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


      // ReservedWord 수집
      reservedWords.all.forEach(e => {
        while ((match = e.reg.exec(str))) {
          if(match[1].toString()){
            match.index++;
          }     
          let count = 0;
          while(count < escapeTable.length && escapeTable[count].escapeindex < match.index) count++;
          allTokens.push({
            line: count + 1, 
            index: match.index,
            type: e.name,
            token: match[2].toString()
          });
        }
      });

      // Operations 수집
      operations.forEach(e => {
        while ((match = e.reg.exec(str))) { 
          let count = 0;
          while(count < escapeTable.length && escapeTable[count].escapeindex < match.index) count++;
          allTokens.push({
            line: count + 1, 
            index: match.index,
            type: e.name,
            token: match.toString()
          });
          str = str.replace(match[0], " ");
        }
      });


      // Error Token 수집
      while ((match = id.exec(str))) {
        if (new RegExp(reservedWords.sum, "g").exec(match.toString()).index != 1) {  
          let count = 0;
          while(count < escapeTable.length && escapeTable[count].escapeindex < match.index) count++;   
          allTokens.push({
            line: count + 1, 
            index: match.index,
            type: "ERROR",
            token: match[0].toString()
          });
        }
      }

      allTokens.sort((a, b) => a.index - b.index);
      allTokensTable = allTokens

      // Table에 있는 Token들의 Type을 교체   
      for (let i = 0; i < allTokens.length; i++){
        if(allTokens[i].type == "ERROR"){
          if(allTokens[i - 1].type == "DATA_TYPE" || allTokens[i + 1].type == "LEFT_ROUND_B"){
            if(allTokens[i + 1].type == "LEFT_ROUND_B"){
              allTokens[i].type = "FUNC_NAME";
              funcTable.push({
                token: allTokens[i].token});  
              }
            else {
              allTokens[i].type = "VARIABLE_NAME";
            }
          }
          else if (allTokens[i - 2].token =="*") {
            allTokens[i].type = "VARIABLE_NAME"
          }
        if (allTokens[i].type == 'VARIABLE_NAME') {
          variableTable.push({
            token: allTokens[i].token
          });
        }
        for(let j=0; j<variableTable.length;j++){
          if (variableTable[j].token == allTokensTable[i].token){
            allTokens[i].type = "VARIABLE_NAME"
          }
        } 
      }
    }    
      resolve(allTokens);    

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