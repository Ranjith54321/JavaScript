/*
    Here we are going to see :

    1.) Function Statement

    2.) Function Expression

    3.) Function Declaration

    4.) Anonymous Function

    5.) Named Function Expression

    6.) Difference Between Parameters & Arguments

    7.) First Class Functions (or) First Class Citizens

*/

// 1.) Function Statement :

fun1();
fun2();

function fun1(){
    console.log("this is Fucntion statement");
}

// 2.) Function Expression
/*
function (){ // function without name is called anonymous function but if you use this in code this will show error 

}
*/

let fun2 = function(){ // so "Function Expression" uses 
    console.log("this is Fucntion statement");
}

// initializing value to the variable is called Function Expression

/*
 The difference between Statement and Expression is Based on hoisting 

 you know how the function and variables get's hoisted 

 so in line no 23 you can not access before assigning it 
 ***
*/

// 3.) Function Declaration ;

    // function Declaration and and Function Statement are same