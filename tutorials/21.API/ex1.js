// handling API's

/*
basic 

fetch()
.then()
.then()
(you can add as many .then you need)
.catch()

controll return's from top to bottom
like -> fetch() -> then() -> then() 

*/
// this code will not work here so run it on chrome console
// here we use simmple API it will give the response in JSON form 
// API -> chuknorris
fetch("https://api.chucknorris.io/jokes/random")
.then((response)=>{ // the inseide function name bay be anything it just fetch from above function
    //console.log(response)
    return response.json()// it will go to below then
})
.then((data)=>{
    console.log(data)
    var joke = data.value;
    console.log(joke)
})
.catch()


// in chrome console you can see promise so in server side some Async function is hapening 