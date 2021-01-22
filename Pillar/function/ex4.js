// 4. Anonymois Function
/*
function () {

} 
*/ 
// this is called anonymous function 
// but Ecma Script standarnds does not allow this kind of declaration's 

// we can use this anonymous function in variable function's  (Function Expression)


// 5.) Named function Expression :

var fun1 = function xyz(){ // this is called "Named function Expression"
    console.log("this is xyz function block");
    console.log(xyz);
    //console.log(xyz()); // this is cause a ifinite loop I don't know how 
}

fun1();
//xyz(); // you can't access this function here (it will show error) it can be accessable only inside the xyz function block