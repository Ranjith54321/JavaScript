// it is same like what we see in java exception handling (for this example)

// remember if exception raises the rest of the program will not excecute but it you handle the exception then the rest of the application works fine

// task convert doller to Rs

const convRs = (doller) =>{
    if(typeof doller === 'number')
        return doller*70
    else        
        throw 'Please enter the amount in the number formate'
}

//console.log(convRs(5)) // it work's fine
//console.log('5'*2) // it is also works fine it's works based on coercion if typeof number is not there

///console.log('five') // this wil not work fine bcpz it is string so we need to handle this 

try{
    //console.log(convRs(5))
    console.log(convRs('five'))
}catch(e){
    console.log(e) // it will print the error message what we passed 
}

console.log("if you are not handle the exceptio i will not execute")