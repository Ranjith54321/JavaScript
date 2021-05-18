// before that remember the hoisting 
/*
[let, const]  and [var] have different behaviour 

    -> let and const values are stored in different memory location    

    -> but for "var" the hoisting is happened in globally so that it can be accessable by gloabl window object (or this)




*/

// Difference between "let" and "var"

/*
    //1.) in var : you can do
    console.log(a);
    var a = 10; 
    // which give the out put as "undefined"  bcoz here hoisting is happened globally

    //2.)  in let : you can't do it gives error "ReferenceError":
    console.log(a);
    let a = 10;    // for let variable hoisting is happened in different memory 

    

*/

 // Temporal dead Zone in let :
 /*
 (which is not it const bcoz variable declaraion and value initialization should happen at same time  otherwise it will throw Syntax error)

    console.log(a);


    let a = 10; // memory allocation (hoisting )  for "a", is happened on some other memory not on global memory

    // so you can't access the that memory 

    // if you access the "a" before it get initiallized it will give "ReferenceError" 

    // from line no 34 to 36 is called Temporal dead zone for let variable "a" after 36 it got intialized 


*/

// Rules for let 

/*
    -> we can declare let variable at only one time 
    let a = 10;
    a = 200; // this is possible and correct 

    but ..

    let a = 100;
    var a = 20; 
    
    and 

    var a = 10;
    let a = 100;
    
    // which will throw error

*/


// Rules for const 
/*
   // const is also same like let but it has some strick rules
   
   // both let and const are not stored in global memory but in different memory 

    
   -> const variable shhould be decalre and initialize  at the same time eg : const a = 10000; not like below

                const a;
                a = 1000;   // this will show syntax error 

*/

