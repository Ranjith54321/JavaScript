// Destructure

let arr = ["hi",2,"bye"]

var a1 = arr[0]
var a3 = arr[2]

console.log(`arr[0] : ${a1} and arr[2] : ${a3}`)

// below is called Destructure

let [ar1 , ar2, ar3] = arr
console.log(`arr[0] : ${ar1} and arr[2] : ${ar3}`)

/*
    to use Destructure we need :

    1.) Right Hand Side and Left Hand Side types should be same 
    2.) Destrucutre is used not only for array's we can use Object and others also
    3.) while using Destructure for objects keep the variable name's same like object
*/

// example Destructure for objects

let obj = {
    name : "ranjith",
    age : 21,
    role : "SoftwareEngineer",
}
// the declaration of Destruture also should be in object type
var {name,age,role} = obj

console.log("for objects")

console.log(name + " and role "+role )

// not to do 

var {myname,age,role} = obj 
console.log(myname) //<-- see this output // so variable names also should be same
