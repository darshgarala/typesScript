"use strict";
const x = 1;
console.log(x);
const x1 = "darsh";
console.log(x1);
function greet(firstName) {
    console.log("Hello " + firstName);
}
greet("harkirat");
// Sum function
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));
// Return true or false based on if a user is 18+
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(2));
// Create a function that takes another function as input, and runs it after 1 second.
function delayedCall(fn) {
    setTimeout(fn, 1000);
}
delayedCall(function () {
    console.log("hi there");
});
function sumOf3(a, b, c) {
    return a + b + c;
}
const ans = sumOf3(1, 2, 3);
console.log('ans = ', ans);
// 
const greet1 = (name) => `Hello, ${name}!`;
