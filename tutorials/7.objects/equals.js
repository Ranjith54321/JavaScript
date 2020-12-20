// difference between == and ===

//  == -> it compares the values

//  === it comapres the object (if you compare obj if use to compare normal variables then it acts like ==)

console.log(" == " + (2 == 2.0))

console.log(" === " + (2 === 2.0))

var str = " "
var str2 = " "

console.log("str compare ==  "  + (str==str2))

console.log("str compare ===  " + (str===str2))

var obj1 = {}
var obj2 = {}

console.log("obj compare ==  "  + (obj1==obj2))

console.log("obj compare ===  " + (obj1===obj2))

// == and === comapres the values for the non object data types (int, float , string , char  )

// == and === for object always it performs reference comparission

