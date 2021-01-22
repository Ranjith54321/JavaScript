// 6.) Difference Between Parameters & Arguments : -> Ability to use like values**

var func = function(param1,param2){ // this is called Parameter it is only accessable insde this block
    console.log(param1+" "+param2);
}

func("ranjith","dot"); // this is called Argumanet ***

// 7.) First Class Functions (or) First Class Citizens

// 1.get parameter as a function 
function a(param){
    console.log(param);
}

// 2.pass function as a Argument
let b = function(){
    console.log("function using variable decalration");
};
a(function(){
    console.log("function passed as a argument");
})


// 3.return funation as a value 
let func2 = function(){
    return function(){
        console.log("retured function");
    }
}

let getfun = func2();

/*
     functions are heart of JavaScript 

     we can => 1.get parameter as a function 
               2.pass function as a Argument
               3.return funation as a value 

*/

// So the functions which are satisfies above needs these are calles "First Class Functions" or "First Class Citizens"

// Functions ability to act as values, able to pass as an arguments and can be return from the functions is calles First class functions

// First Class Functions also called as First class Citizens
