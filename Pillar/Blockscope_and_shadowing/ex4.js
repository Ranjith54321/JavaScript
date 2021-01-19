// Illigal Shadowing 

// some times Shadowing has some rules 
/*
 // Illigal :
 let a = 10;
{
    var a = 10;  // this is open block so the "let" and "var" will be clash  (var will cross it's boundary here)
}

// legal 
let a = 10;
function fun(){
    var a = 10; // here this var has only this block scope 
}

// so "var" is function  scoped ****** important 
// legal
var a = 10;
{
    let a = 10;
}

// same for "const" also
*/


// lexical scope  :

const a = 10;
{
    const a = 20;
    {
        const a = 30;
        console.log(a);  // this can get the value from it's above variable [if not there it will get from scope chain address "see scope chain notes"]
    }
    console.log(a);
}


// rules for "Arrow functions is same as normal functions"