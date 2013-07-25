nodedit.plugin.jslint.LABELS = {
    ass       : 'Assign. Exp.',
    bitwise   : 'Bitwise Operators',
    browser   : 'Browser',
    closure   : 'Google Closure',
    continue  : 'Continue',
    couch     : 'CouchDB',
    debug     : 'Debug Statements',
    devel     : 'Devel',
    eqeq      : '== and !=',
    es5       : 'ES5 Syntax',
    evil      : 'Eval()',
    forin     : 'Unfiltered For-In',
    indent    : 'Indent',
    maxerr    : 'Max Errors',
    maxlen    : 'Max Line Len',
    newcap    : 'UnCapd Constructors',
    node      : 'Node',
    nomen     : 'Nomen',
    passfail  : 'Stop on Err',
    plusplus  : '++ and --',
    properties: 'Properties',
    regexp    : '. and [^ in RegEx',
    rhino     : 'Rhino',
    unparam   : 'Unused Parameters',
    sloppy    : 'Missing Use Strict',
    stupid    : 'Stupidity',
    sub       : 'Inneficient Subscript',
    todo      : 'TODO Comments',
    vars      : 'Many Vars/FN',
    white     : 'Messy White Space'    
};

Handlebars.registerHelper('jslintLabel',
    function (str) {
        return (nodedit.plugin.jslint.LABELS !== undefined ? nodedit.plugin.jslint.LABELS[str] : str);
    }
);