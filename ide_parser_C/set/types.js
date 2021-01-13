// Type

module.exports = [
  {
    name: "M_COMMENTS",
    reg: /([^\"]\s*)(\/\*[^\*\/]*\*\/)(\s*[^\"])/g

  },
  {
    name: "S_COMMENTS",
    reg: /()(\/\/.*\n?)/g
  },
  {
    name: "INCLUDE",
    reg: /\#include/g
  },

  {
    name: "HEADER",
    reg: /\<.{1,}\>/g
  },
  {
    name: "STRING_LITERAL",
    reg: /()(\"(\\\"|[^\"])*\")/g
  },
  {
    name: "Escape_Character",
    reg: /()(\'(\\.|[^\'])?\')/g
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
