// prototype 
/*
    when ever you create Array , function or Object's JavaScript attach the functionalities to it 

    we can access the functionalities using . symbol

    you can kknow the 
*/
let arr = [1,2];

console.log(arr.__proto__);

// run the above code in the browser console then see the difference

// arr.__proto__      // --> returns the array of functionalities 
// arr.__proto__.__proto__  // --> returns the Object of functionalites 
// arr.__proto__.__proto__.__proto__ // returns null


// you can see Array.__proto__ 

// JavaScript every thing in the form of objects