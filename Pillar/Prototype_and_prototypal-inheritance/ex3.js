// functios 

Function.prototype.myfun = function(){
    console.log("this is function bro!");
}

// by declaring above function like that the myfun will available in JavaScript Function prototype in this js file or programe

// now you see I'm going to access the above function by using proto which in js

function fun(){

}

fun.myfun(); // see th op

// myfun is added to proto in this particular js programe


// x.__proto__; // returns ƒ () { [native code] }  // obj array
// x.__proto__.__proto__; //returns {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …} // obj
// x.__proto__.__proto__.__proto__; // returns null