// simple function

let simple_function = function(){
    console.log('this is simple function')
}

simple_function()

// parametarize function

let param_function = function(name){
    console.log("welcome "+name)
    console.log(`${name} please enter`)
}

param_function('Ranjith')

// return values from function

let retun_function = function(num1, num2){
    let sum = num1+num2;
    return sum
}

console.log("sum is = "+retun_function(5,3))