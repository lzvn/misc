//I tested it with the regex of the search pattern of vim

//for car and cat
let reg1 = /ca\w/;

//for pop and prop
let reg2 = /p\w*op/;

//for ferret, ferry, and ferrari
let reg3 = /ferr\w*/;

//for any word ending with ious
//pretentious, anxious, curious
let reg4 = /\w*ious/;

//whitespace followed by a period, comma, colon or semicolon
// , . ; :
let reg5 = /\s(,|\.|;|:)/;

//a word longer than six characters
let reg6 = /\w{6}\w+/;

//word without e or E
let reg7 = /\b[a-df-z]+\b/i;
//I cheated on this last one doing some googling and getting
//an answer on stack overflow
