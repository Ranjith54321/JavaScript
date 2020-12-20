// for of loop :  this is for array elements we used this for Map also

let arr = [4,6,7,34,98,67,54,32]

for(let n of arr){
    console.log(n)
}

// for of loop : for objects :

let ob = {
    yt : "Youtube",
    ig : "Instagram",
    fb : "Facebook",
}

for(let n in ob){
    console.log(`key is : ${n} and value is : ${ob[n]}`)
}