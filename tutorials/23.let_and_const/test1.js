/*
    Hoisting in let and const 

    you know in Execution context has memeory and code block while you run te code the default memory wil allocate to the Memory lock 

    so the var variables will get undefined (defaultily)

    which is is global memory 

    but let and const are different these are strored in different memory


    you can redeclare the var variables as many times you can but you can't do it for let and const variables

*/ // vide link : https://youtu.be/BNC6slYCj50?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP

// 1->  reference error
//console.log(a); // this will show the reference error // because value is not initialize which is in TEMPORAL DEAD BLOCK

let a = 100;
// const a = 100;
// reference error is common for both let and const

// 2-> type error
// for conat variable you shoud do decalration and intialization at the same time and do not do re intialization other wise it will show error


// 3-> syntax error
// wrong 
const b; // will create sytanx error
b = 100; 

const c = 100; // which is correct (this is line only )
c=123; // this is type error (redeclaration)







