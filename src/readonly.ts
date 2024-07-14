// The Readonly utility type in TypeScript is used to make all properties of a given type read-only.
// This means that once an object of this type is created, its properties cannot be reassigned. 
// It's particularly useful for defining configuration objects, constants, or any other data structure 
// that should not be modified after initialization.



type UserReadOnly = {
    readonly name:string,
    readonly age:number
}

const users:UserReadOnly = {
    name:'darsh',
    age:21
}

// error bcoz readonly

// users.age=22;
