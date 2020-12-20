// now see here

function add(x){
    return function(y){
        return x+y
    }
}

let fun = add(4) // it will return the reference of add()

console.log(fun(5)) // while fun had the reference of add then you can call the fun() so it keeps the previous value also



// you can access the above function in below way also

console.log(add(9)(5))


// video link : https://youtu.be/bC-ilFHSt4s?list=PLIFaUSlZr0p9nvXYn2xK84CGH7s4KZi-o