// BigInt Multiplication Example
let x = 9007199254740995n;
let y = 9007199254740995n;
let z = x * y;

/*
Notes
Arithmetic between a BigInt and a Number is not allowed (type conversion lose information).

Unsigned right shift (>>>) can not be done on a BigInt (it does not have a fixed width).

*/