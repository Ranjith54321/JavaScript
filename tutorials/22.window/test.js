/*
-> window is nothing but global object 

-> any code write which is not inside a function in called the gloabl space

-> all browsers has their won Java script engine for running the code 

-> so when ever you run the js code the (even empty file) the global object is created this is called the window

-> this (keyword) also refers to the window object

-> Nodejs also has this kind of gloabal object 



*/

// run this file in chrome and type below commented commands on chrome console
/*
var a = 10;

function b(){
    var x = 100;
    console.log(x);
}

this === window 

this -> refers global object (window)

console.log(window.a);
console.log(a);
console.log(this.a);

*/

function a(){
    var x=10;
}

console.log(a());