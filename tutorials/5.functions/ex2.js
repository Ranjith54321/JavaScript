// default parameters  in js

function fun1(name,age) {
    return 'my name is : '+name+' my age is  : '+age
}

console.log(fun1())


// we can set default value for the function variables
function fun2(name = 'no name',age=0) {
    return 'my name is : '+name+' my age is  : '+age
}
console.log(fun2())

// if you pass value to the variables then it will replace it

console.log(fun2("ranjith",21))


// same example using let
let fun3 = function(name = 'no name',age=0){
    return 'my name is : '+name+' my age is  : '+age
}

console.log(fun3("dot",55))
