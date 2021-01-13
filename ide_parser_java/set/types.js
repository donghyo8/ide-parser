// Type

module.exports = [

  {
    name: "PACKAGE",
    reg: /[a-zA-z]\w*\.[a-zA-z]\w*\.[a-zA-z]\w*/g

  },
  {
    name: "M_COMMENTS",
    reg: /([^\"]\s*)(\/\*[^\*\/]*\*\/)(\s*[^\"])/g

  },
  {
    name: "S_COMMENTS",
    reg: /()(\/\/.*\n?)/g
  },
  {
    name: "SYSTEM.EXIT",
    reg: /System\.exit/g
  },
  {
    name: 'SYSTEM.IN',
    reg: /System\.in/g
  },
  {
    name: "STRING_LITERAL",
    reg: /()(\"(\\\"|[^\"])*\")/g 
  },
  {
    name: "A_CHAR",
    reg: /()('(\\.|[^\'])?\')/g
  },
  {
    name: "FLOAT_LITERAL",
    reg: /([ \*\/\-\+\=])(\d+\.\d+)/g
  },
  {
    name: "INTEGRAL_LITERAL",
    reg: /([ \*\/\-\+\=]|^)(\d+)/g
  },
];
