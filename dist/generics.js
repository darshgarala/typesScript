"use strict";
//Generics enable you to create components that work with any data type while still providing 
// compile-time type safety.
function getFirstElement(arr) {
    return arr[2];
}
const el = getFirstElement([1, 2, '3']);
console.log(el);
// -----------------------------
// Typescript isn’t able to infer the right type of the return type
// function getFirstElement(arr: (string | number)[]) {
//     return arr[0];
// }
// const el = getFirstElement(["darsh", "garala"]);
// console.log(el.toLowerCase())
// -------------------
function identity(arg) {
    return arg;
}
let output1 = identity("myString");
let output2 = identity(100);
// ----------------------------------------------//
function getFirstElement1(arr) {
    return arr[0];
}
const el1 = getFirstElement1(["darsh", "garala"]);
console.log(el1.toLowerCase());
// ----------------------- error code ---------------------//
// function getFirstElement12<T>(arr: T[]) {
//     return arr[0];
// }
// const el12 = getFirstElement12(["darsh",12]);
// console.log(el12.toLowerCase())
