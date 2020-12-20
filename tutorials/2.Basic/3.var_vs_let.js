// var -> this variable can ce acce


let global = "i'm let global"

if(true){
    let local = "i'm let local"

    var varlocal = "i'm var local"
    console.log(global)
    console.log(local)

    global = "let global can change using block"
}

//console.log(local) // it create error

console.log(varlocal) // var variable can be accessable out of the scope alo but let not like that

console.log(global) 

// using let is most recommended bcoz it is like other prg languages

// if you need local variable as global then use var 

// but avoid var use let declaration