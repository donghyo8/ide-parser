// Operation

module.exports = [
    {
        name: 'EOL',
        reg: /\n/g
    },
    {
        name: 'PRE/POST_FIX_PLUS',
        reg: /\+\+/g
    },
    {
        name: 'PRE/POST_FIX_MINUS',
        reg: /\--(?!\/)/g
    },
    {
        name: 'PLUS',
        reg: /\+(?!\+)/g
    },
    {
        name: 'LEFT_CURLY_B',
        reg: /\{/g
    },
    {
        name: 'RIGHT_CURLY_B',
        reg: /\}/g
    },
    {
        name: 'ARRAY',
        reg: /\[\]/g
    },
    {
        name: 'LEFT_SQUARE_B',
        reg: /\[(?!\[])/g
    },
    {
        name: 'RIGHT_SQUARE_B',
        reg: /\](?!\])/g
    },
    {
        name: 'LEFT_ROUND_B',
        reg: /\(/g
    },
    {
        name: 'RIGHT_ROUND_B',
        reg: /\)/g
    },
    {
        name: 'COMMA',
        reg: /\,/g
    },
    {
        name: 'SEMICOLON',
        reg: /\;/g
    },
    {
        name: 'DOT',
        reg: /\./g
    },
    {
        name: 'EQUAL',
        reg: /\==/g
    },
    {
        name: 'ASSIGNMENT',
        reg: /\=(?!\=)/g
    },
    {
        name: 'PLUSEQUAL',
        reg: /\+=/g
    },
    {
        name: 'MINUSEQUAL',
        reg: /\-=/g
    },
    {
        name: 'MultiEQUAL',
        reg: /\*=/g
    },
    {
        name: 'divideQUAL',
        reg: /\/=/g
    },
    {
        name: 'REMAINDERQUAL',
        reg: /\%=/g
    },
    {
        name: 'divideQUAL',
        reg: /\>>=/g
    },
    {
        name: 'divideQUAL',
        reg: /\<<=/g
    },
    {
        name: 'divideQUAL',
        reg: /\&=/g
    },
    {
        name: 'divideQUAL',
        reg: /\^=/g
    },
    {
        name: 'divideQUAL',
        reg: /\|=/g
    },
    {
        name: 'OR',
        reg: /\|\|/g
    },
    {
        name: 'AND',
        reg: /\&\&/g
    },
    {
        name: 'BITOPERATOR',
        reg: /\|/g
    },
    {
        name: 'BITOPERATOR',
        reg: /\^/g
    },
    {
        name: 'BITOPERATOR',
        reg: /\&/g
    },
    {
        name: 'MINUS',
        reg: /\-/g
    },
    {
        name: 'MULTIPLY',
        reg: /\*/g
    },
    {
        name: 'DIV',
        reg: /\//g
    },
    {
        name: 'REMAINDER',
        reg: /\%/g
    },
    {
        name: 'TERNARY',
        reg: /\?/g
    },
    {
        name: 'TERNARY',
        reg: /\:/g
    },
    {
        name: 'SHIFT RIGHT',
        reg: /\>>/g
    },
    {
        name: 'SHIFT LEFT',
        reg: /\<</g
    },
    {
        name: 'LOGICALNOT',
        reg: /\!/g
    },
    {
        name: 'BITWISENOT',
        reg: /\~/g
    },
    {
        name: 'ADDRESS OF',
        reg: /\&/g
    },
    {
        name: 'DEREFERENCE OF',
        reg: /\*/g
    },    
    {
        name: 'SIZEOF',
        reg: /\sizeof/g
    },
    {
        name: 'STRUCTURE MEMBER ACCESS',
        reg: /\./g
    },
    {
        name: 'STRUCTURE POINTER MEMBER ACCESS',
        reg: /\->/g
    },
    {
        name: 'LESSTHAN OR EQUAL',
        reg: /\<=/g
    },
    {
        name: 'GREATERTHAN OR EQUAL',
        reg: /\>=/g
    },
    {
        name: 'EQUAL',
        reg: /\==/g
    },
    {
        name: 'NOTEQUAL',
        reg: /\!=/g
    },
    {
        name: 'LESSTHAN',
        reg: /\</g
    },
    {
        name: 'GREATERTHAN',
        reg: /\>/g
    }
    
];