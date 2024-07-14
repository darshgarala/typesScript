const x: number = 1;
console.log(x);

const x1: string = "darsh";
console.log(x1);



function greet(firstName: string) {
    console.log("Hello " + firstName);
}

greet("harkirat");

// Sum function
function sum(a: number, b: number): number {
    return a + b;
}
console.log(sum(2, 3));


// Return true or false based on if a user is 18+
function isLegal(age: number) : boolean {
    if (age > 18) {
        return true;
    } else {
        return false
    }
}

console.log(isLegal(2));

// Create a function that takes another function as input, and runs it after 1 second.

function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}

delayedCall(function() {
    console.log("hi there");
})

function sumOf3(a:number , b:number , c:number):number{
    return a+b+c;
}

const ans = sumOf3(1,2,3);
console.log('ans = ',ans);



// 


const greet1 = (name:string) => `Hello, ${name}!`;



// 

function something(cb1:(str:string,num:number)=>string):string{
    const ans = cb1("demo",121);
    return "1";
}