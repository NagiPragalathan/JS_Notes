/*
String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split() 

*/

// Note
// All string methods return a new string. They don't modify the original string.

// Formally said:

// Strings are immutable: Strings cannot be changed, only replaced.

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;

// Extracting String Parts
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

let text1 = "Apple, Banana, Kiwi";
let part = text1.slice(7, 13);
console.log(part);


// Note
// The replace() method does not change the string it is called on.

// The replace() method returns a new string.

// The replace() method replaces only the first match

// If you want to replace all matches, use a regular expression with the /g flag set. See examples below.

let text3 = "Please visit Microsoft and Microsoft!";
let newText = text3.replace("Microsoft", "W3Schools");

// To replace case insensitive, use a regular expression with an /i flag (insensitive):

let text11 = "Please visit Microsoft!";
let newText1 = text11.replace(/MICROSOFT/i, "W3Schools");

// To replace all matches, use a regular expression with a /g flag (global match):

// Example
// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace(/Microsoft/g, "W3Schools");

/*
Converting to Upper and Lower Case
A string is converted to upper case with toUpperCase():

A string is converted to lower case with toLowerCase():
 */



// ===================================================
// Extracting String Characters
// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]
let text111 = "HELLO WORLD";
let char1 = text111.charAt(0);

let text112 = "HELLO WORLD";
let char = text112.charCodeAt(0);

// Note
// Property access might be a little unpredictable:

// It makes strings look like arrays (but they are not)
// If no character is found, [ ] returns undefined, while charAt() returns an empty string.
// It is read only. str[0] = "A" gives no error (but does not work!)

let text113 = "HELLO WORLD";
let char2 = text113[0];

// let text = "HELLO WORLD";
// text[0] = "A";    // Gives no error, but does not work

// A string can be converted to an array with the split() method:

// Example
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe

// fromCharCode()	Returns Unicode values as characters

// f"hgfcvh{jhbjh}"
//     `${text}`