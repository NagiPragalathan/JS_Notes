a = 5, b = 6, c = a + b;

// d=10 c=20,d=30 --- worng way

console.log(a,b,c)

// You can declare many variables in one statement.

// Start the statement with let and separate the variables by comma:

let person = "John Doe", carName = "Volvo", price = 200;

let str='';
for(let i=0;i<10;i++){
    str+='\n'
    for(let j=0;j<10;j++){
        str+='*';
    }
}
// for(let i=0;i<10;i++){str+='\n';for(let j=0;j<10;j++){str+='*';}}
// 1

console.log(str)

