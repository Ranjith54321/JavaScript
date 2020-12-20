// closure from Nmaste Java Script
/*
    closure is nothing but function along with it's lexical scope boundle together

    video link : https://youtu.be/qikxEIxsXco

    see ex3 -> ex4 -> ex5 same order
*/

function x(){
    var a = 10;
    function y(){ // you from here also 
        console.log(a);
    }
    return y;

    /*
    return function y(){ // you from here also 
        console.log(a);
    }
    no need return y;
    */
}

var b = x();

console.log(b); // the full fuction will print only in the browser // here in the cosole it tells just function
b();

