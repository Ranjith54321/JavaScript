/*
    Execution Context has two parts 
            1.) Memory block 2.) code block

    the oprations which are happened in the memory part is called Hoisting 

*/

// eg : 
/*

var x = 7;

function getname(){
    console.log("Ranjith");
}

getname();
console.log(x);


// op :
    Ranjith
    7
*/

console.log(getname); // here you can see (in out put it contains the whole function in the variable)
getname();
console.log(x);


var x = 7;

function getname(){
    console.log("Ranjith");
}

// now run see the out put 

/*
 // op : 
    [Function: getname] // -> in browser console it will show the whole function 
    Ranjith 
    undefined

    -> function variable has  content of the function 
            -> but it will defer for var or let variale function see the next ex's

    -> but normal variable has intially has undefined because it not yet reached the code initialization step
*/