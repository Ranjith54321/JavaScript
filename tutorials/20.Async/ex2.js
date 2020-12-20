// promise async and await

// see ex2.js and ex3.js continously
// video link :https://youtu.be/Gjbr21JLfgg?list=PLIFaUSlZr0p9nvXYn2xK84CGH7s4KZi-o
const uno = () =>{
    return "I am One"
}

const dos = () =>{
    setTimeout(()=>{
        return "I am Two"
    },3000)
}

const tres = () =>{
    return "I am Three"
}

const funCall = ()=>{
    let one = uno()
    console.log(one)

    let two = dos()
    console.log(two)

    let three = tres()
    console.log(three)
}

funCall()

// see this out put after enter dos() instead of waiting control going to excecute other tasks to done