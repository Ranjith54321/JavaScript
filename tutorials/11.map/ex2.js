
var ranjith = {
    name : 'I am Ranjith',
    age : 21,
    isActive : true,
}
var dot = {
    name : 'I am dot',
    age : 21,
    isActive : true,
}
var vr46 = {
    name : 'I am vr46',
    age : 15,
    isActive : false,
}

let users = new Map()



users.set('ran',ranjith);
users.set('dot',dot);
users.set('vr',vr46);
// for of loop (it also called as iterator)
// case 1 : access key only and values only
// ex1-> key's
for (const key of users.keys()) { // here insetead of key you can give any variable name 
    console.log(key)             // but map access is important like key or value or entires
}
// ex2-> value's
for (const val of users.values()) {
    //console.log(val)
    console.log(`hi ${val.name} ${val.age} iam active ${val.isActive}`) // print using litterals
}

// case 2 : access key-value pair using for-of loop
for (const [key,val] of users.entries()) { // always here key,values pair 
    //console.log(key+" = "+val) // uncomment and see what is output 
    //console.log(key+" = "+val.name)
    console.log(` key is ${key} and hi ${val.name} ${val.age} iam active ${val.isActive}`)
}

// case 3: using forEach loop

users.forEach((val,key) => console.log(key+" = "+val))

// important note forEach loop always [value,key] pair  


// creat int 2D array and make pass to map

var arr2d = [['one','1'],['two','2'],['three','3']]

console.log(arr2d)

var map = new Map(arr2d)

// only key 
for (const k of map.keys()) {
    console.log(k)
}

// only values
for (const v of map.values()) {
    console.log(v)
}

// key value - pair
for (const [k,v] of map.entries()) {
    console.log(k+ "="+v)
}

// for more read Map js MDN in google