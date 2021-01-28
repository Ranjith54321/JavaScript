/*
    In this series of ex's have

    1. what is a callback function in JavaScript

    2. JavaScript is synchronous single-threaded language***** (it only do onething at a time)

    3. Blocking the main thread

    4. Power of Callbacks?

    5. Deep about Event Listeners

    6. Closures Demo with  Event Listeners

    7. Scope Demo with Event Listeners

    8. Garbage Collection & removeEventListeners

*/

// 1.) What is Event Listeners :

function x(y){ // function x has the hole control of function "y"
    console.log("Functon x");
    y();
}
x(function y(){
    console.log("Functon y");
}); 

// passing function as a "Argument" is called "Callback" Function***

// so now the controll of the function y is given to function "x" so now funtion has the controll of function "y"

// 

// --------------example for setTimeout----------

setTimeout(function(){ // here first Parameter is called Callback funtion***
    console.log("setTimeout Function");
},5000);

// Callback functions are the the reason for the Asynchronous world 

// so the callback funtion and the Timer is stored in separate memory space 

// you know Async funnction's excecute atlast at that time the call back function will excecute