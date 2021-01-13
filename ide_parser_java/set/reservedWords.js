
// ReservedWord

let reservedWords = all(); 

let reservedWordsSum = '(?!(^|[^a-zA-Z])(' + reservedWords.reduce(
    ( all , e ) => all +e.reg.source + '|',
    ''
).slice(0, -1)+')(\\W|$))';

reservedWords.map( e => e.reg = new RegExp('(^|[^a-zA-Z])('+e.reg.source+')(\\W|$)','g') || e  );

module.exports = {
    sum: reservedWordsSum,
    all: reservedWords
};

function all(){
    return [
        {
            name: 'ARGUMENTS',
            reg: /args/g
        },
        {
            name: 'IF',
            reg: /if/g
        },
        {
            name: 'DATA_TYPE',
            reg: /int/g
        },
        {
            name: 'DATA_TYPE',
            reg: /Buffered[a-zA-z]\w*/g
        },
        {
            name: 'DATA_TYPE',
            reg: /File[a-zA-z]\w*/g
        },
        {
            name: 'DATA_TYPE',
            reg: /Scanner/g
        },
        {
            name: 'ELSE',
            reg: /else/g
        },
        {
            name: 'MAIN',
            reg: /main/g
        },
        {
            name: 'THIS',
            reg: /this/g
        },
        {
            name: 'TRUE',
            reg: /true/g
        },
        {
            name: 'DATA_TYPE',
            reg: /void/g
        },
        {
            name: 'CLASS',
            reg: /class/g
        },
        {
            name: 'FALSE',
            reg: /false/g
        },
        {
            name: 'WHILE',
            reg: /while/g
        },
        {
            name: 'LENGTH',
            reg: /length/g
        },
        {
            name: 'PUBLIC',
            reg: /public/g
        },
        {
            name: 'PRIVATE',
            reg: /private/g
        },
        {
            name: 'PROTECTED',
            reg: /protected/g
        },
        {
            name: 'RETURN',
            reg: /return/g
        },
        {
            name: 'STATIC',
            reg: /static/g
        },
        {
            name: 'NEW',
            reg: /new/g
        },
        {
            name: 'DATA_TYPE',
            reg: /String/g
        },
        {
            name: 'DATA_TYPE',
            reg: /float/g
        },
        {
            name: 'DATA_TYPE',
            reg: /char/g
        },
        {
            name: 'DATA_TYPE',
            reg: /boolean/g
        },
        {
            name: 'EXTENDS',
            reg: /extends/g
        },
        {
            name: 'NULL',
            reg: /null/g
        },
        {
            name: 'ABSTRACT',
            reg: /abstract/g
        },
        {
            name: 'ASSERT',
            reg: /assert/g
        },
        {
            name: 'BREAK',
            reg: /break/g
        },
        {
            name: 'CONTINUE',
            reg: /continue/g
        },
        {
            name: 'BYTE',
            reg: /byte/g
        },
        {
            name: 'CASE',
            reg: /case/g
        },
        {
            name: 'CATCH',
            reg: /catch/g
        },
        {
            name: 'CONST',
            reg: /const/g
        },
        {
            name: 'DEFAULT',
            reg: /default/g
        },
        {
            name: 'DO',
            reg: /do/g
        },
        {
            name: 'DATA_TYPE',
            reg: /long/g
        },
        {
            name: 'DATA_TYPE',
            reg: /short/g
        },
        {
            name: 'DATA_TYPE',
            reg: /double/g
        },
        {
            name: 'ENUM',
            reg: /enum/g
        },
        {
            name: 'FINAL',
            reg: /final/g
        },
        {
            name: 'FINALLY',
            reg: /finally/g
        },
        {
            name: 'FOR',
            reg: /for/g
        },
        {
            name: 'GOTO',
            reg: /goto/g
        },
        {
            name: 'IMPLEMENTS',
            reg: /implements/g
        },
        {
            name: 'IMPORT',
            reg: /import/g
        },
        {
            name: 'INSTANCEOF',
            reg: /instanceof/g
        },
        {
            name: 'INTERFACE',
            reg: /interface/g
        },
        {
            name: 'SHORT',
            reg: /short/g
        },
        {
            name: 'SUPER',
            reg: /super/g
        },
        {
            name: 'SWITCH',
            reg: /switch/g
        },
        {
            name: 'THROW',
            reg: /throw/g
        },
        {
            name: 'TRY',
            reg: /try/g
        }
    ];
}