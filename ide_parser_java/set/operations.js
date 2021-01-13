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
        name: 'RIGHT_SQUARE_B',
        reg: /\](?!\])/g
    },
    {
        name: 'LEFT_SQUARE_B',
        reg: /\[(?!\[])/g
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
        name: 'NOT',
        reg: /\!/g
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
        name: 'AND',
        reg: /\&\&/g
    },
    {
        name: 'PRE/POST_FIX_MINUS',
        reg: /\--(?!\/)/g
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
    }
    ,
    {
        name: 'LESSTHAN',
        reg: /\</g
    },
    {
        name: 'GREATERTHAN',
        reg: /\>/g
    }
];