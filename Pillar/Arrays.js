// Arrays in js are objects 

let arr = [1,2,'three'];

// under the hood it will be created as,
let arr_name = {
    0 : 1,
    1 : 2,
    2 : 'three',
}
console.log(arr_name[2]); // if the key is string pass the string for mate inside index block 

arr.forEach((v)=>{
    console.log(v);
})

// to access the object using for each loop
Object.keys(arr_name).forEach((v)=>{
    console.log(`${v} `);
})

Object.values(arr_name).forEach((v)=>{
    console.log(`${v} `);
})

// key value pair
Object.entries(arr_name).forEach(entry=>{
    const [key,val] = entry;
    console.log(`key : ${key} value : ${val}`);
})

// for in loop used in arr and object

// arr :

for(let n in arr){
    console.log(n);
}

// object : 

for(let n in arr_name){
    console.log(`key is ${n} and value ${arr_name[n]}`);
}

// to check whether it is array or not 

Array.isArray(arr) ? console.log("arr is array ") : console.log("arr is not an array");
