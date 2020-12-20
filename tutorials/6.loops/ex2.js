// forEach loop

var num = ['one','two','three','four','five','six']

num.forEach(function(val,i){
    console.log("index "+i+" "+val)
})

num.forEach(function(val,i){
    console.log(`${i+1}  ${val}`)
})

// here val takes the values of the particular index

var arr = ['ranjih','dot',1,30.2]

arr.forEach(function(val, i){ //// it is also supports for non-generics but in java we need to type caste
    console.log(val)
})

arr.forEach(function(){ // foreach is like length() it run upto length of the array
    console.log("hi")
})
console.log("from  check here")
arr.forEach(function(data){ // first argument of the inside of the forEach is always it menntions data
    console.log(data) // it prints the data related to the particular index
})
console.log("to  check here")
arr.forEach(function(data,i){ // first argument of the inside of the forEach is always it menntions data and second argument always refers the index
    console.log(data+" index "+i)
})



// you can use out side fuction also

function fun() {
    console.log("data")
}

num.forEach(fun) // you can't pass the array data from here like above example but you can use it util length of the array

// please remember foreach loop means function inside another function

// for forEach you should use forEach function only if you change the name it would not work