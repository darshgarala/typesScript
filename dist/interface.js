"use strict";
;
function isCheck(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
function greetInter(user) {
    console.log('hii there ', user.fname);
}
isCheck({
    fname: "darsh",
    lname: "garala",
    age: 20
});
;
class Emp {
    constructor(n, a) {
        this.name = n;
        this.Page = a;
    }
    Ingreet(fun) {
        console.log(`${fun} ${this.name}`);
    }
}
const Nemp = new Emp('darsh', 21);
