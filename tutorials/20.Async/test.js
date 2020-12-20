let hello = async() => {
    return "hello man"
}

hello().then((val)=>{
    console.log(val)
})

// when ever you use aysnc process you can use then() to handle the opertaions if you need

// remeber then() we use in fetch() see 21.)API

// example 2
// this below code only work on browser console so hide it and run in the local console
async function fun(){
    return val = await Promise.resolve("this is from Promise")
}

fun().then(alert)


/// important note fetch() function not working on local terminal bcoz of security reasons it will only work on browser 
// read about this in developer.mozilla.org