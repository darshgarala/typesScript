interface User{
    fname:string,
    lname:string,
    age:number,
    email?:string
};

function isCheck(user:User)
{
    if(user.age>18)
    {
        return true;
    }
    else{
        return false;
    }
}

function greetInter(user:User)
{
    console.log('hii there ',user.fname)
}

isCheck({
        fname:"darsh",
        lname:"garala",
        age:20
    })


// ? this is indicet => optional
interface Person{
    name:string,
    Page?:number,
    Ingreet(fun:string):void;
};

class Emp implements Person{
    name:string;
    Page: number;

    constructor(n:string ,a:number){
        this.name = n;
        this.Page = a;
    }

    Ingreet(fun: string): void {
        console.log(`${fun} ${this.name}` )
    }
}

const Nemp = new Emp('darsh',21);