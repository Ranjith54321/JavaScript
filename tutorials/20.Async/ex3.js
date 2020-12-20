const uno = () =>{
    return "I am One"
}

// const dos = async() =>{ // it will generate output with promise // uncomment and see this
//     setTimeout(()=>{
//         return "I am Two"
//     },3000)
// }

const dos = () =>{ // use 
    return new Promise((resolve, reject) => { // this promise method can handle two functions resolve( if every think is okay then it will return witout warnings)
                                                // reject() it will return with warnings
        setTimeout(()=>{
            resolve("I am two") // for this promise will send msg like pending
        },3000)
        //reject("this is will return will errors") // un-commend and see you can add reject any where in side promize function
    })
}

const tres = () =>{
    return "I am Three"
}

// const funCall = ()=>{
//     let one = uno()
//     console.log(one)

//     let two = dos()
//     console.log(two)

//     let three = tres()
//     console.log(three)
// }

// try this also and seee the output difference
/*
const funCall = async()=>{
    let one = uno()
    console.log(one)

    let two = await dos()
    console.log(two)

    let three = tres()
    console.log(three)

    /*
        op:
        I am One
        I am two
        I am Three
    /* // change to here for excecute this function
}


funCall()

*/
// await make function to wait it works then allows control to do other works 