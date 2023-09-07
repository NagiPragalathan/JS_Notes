/*
    The string will be chopped to "We are the so-called ".

    The solution to avoid this problem, is to use the backslash escape character.

    The backslash (\) escape character turns special characters into string characters:

    Code	Result	Description
    \'	'	Single quote
    \"	"	Double quote
    \\	\	Backslash
*/
let text = "We are the so-called \"Vikings\" from the north.";

let str1 = 'sample'
let str2 = new String('sample') //The new keyword complicates the code and slows down execution speed.

// console.log(1==='1', 1=='1')