let max_val = Math.max(1,2,36,4888,5,4,898,0)
//console.log(max_val)

let obj = {}

Object.assign(obj,{ a:1, b:2 ,c:3},{x:4, y:5, z:6})

//console.log(obj)

// see the above operations can accept and process multiple arguments at the same time 

// this is what we gonna see here 

console.log("spread type :")
function add(a,b){
    return a+b
}

console.log(add(5,7)) // it will give ans

let arr = [2,4]

console.log(add(arr)) // see the error here 
// op : 2,4undefined  -> i,e) a->2,4 b-> undefined

console.log(add(...arr)) // this us called spread 3 dont's after variable name will split the values this is also same for Objects as well



// next REST 
// add all nums it will get 
console.log("Add all type :")
function addAll(...nums){// This is called Rest this will convert all recieved elements in the form of array
    console.log("recieved elements : "+nums)
    let sum = 0
    for (const n of nums) {
        sum+=n
    }
    return sum
}
console.log(addAll(...arr)) // note here while passing array
console.log(addAll(1,2,3,4,5,6)) // this type you can pass easily

console.log("get individual elements type :")

function addMul(a,b,...nums){
    console.log("recieved elements : "+nums)

    let mul = a*b;
    let sum=0
    for(let n of nums){
        sum+=n
    }
    return [mul,sum] // return in the type of array
}

console.log(addMul(1,2,3,4,5,6))

