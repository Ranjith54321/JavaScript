// Event Loop 

const uno = () =>{
    console.log("I am One")
}

const dos = () =>{
    setTimeout(()=>{
        console.log("hi")
    },3000) // even if you change the time to 0 milli secs it excecute at last it means when ever the control see the Asynchronous process it will throw to excecute at last
    console.log("I am Two")
}

const tres = () =>{
    console.log("I am Three")
}

// see both the set of function calling 

// uno()
// tres()// here after enter into the dos() it will check other task is anything  availabe to be done then next go to out side of the function then 
// dos()       // after it will excecute that Async function task 

uno()
dos()
tres() // same case here also