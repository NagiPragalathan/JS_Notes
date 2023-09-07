/*What is this?
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.*/


// Arrow function
/*
Since regular functions are constructible, they can be called using the 'new' keyword. However, the arrow functions are only 'callable' and not constructible. Thus, we will get a run-time error on trying to construct a non-constructible arrow function using the new keyword.
*/

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    fullName:function (){
        return this.firstName + " " + this.lastName
    }
};

console.log(person.firstName,person['lastName'],person.fullName())
