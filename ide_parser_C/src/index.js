const LA = require("../set");


class StartParser {
  run(){                                           
    LA("./Parser_C/TESTCASES/reorder.c").then(tokens => {

      tokens = tokens.filter(i => i.type !== "EOL");
      // tokens = JSON.stringify(tokens);
      console.dir(tokens, {'maxArrayLength': null})

       
    });
  }
} module.exports = StartParser;

var start = new StartParser()
start.run()
