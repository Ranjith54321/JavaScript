// coercion is a technique when JavaScript try to interprete and do some this for you

// case 1 :
console.log('5'-5) // here the string 5 is considerd as integer 5

console.log('5'+5) // here it considers string as string and integer as integer


// to find type  of a variable 

let type1 = typeof 5 
console.log(type1)
let type2 = typeof ''
console.log(type2)

// case 2 :

// in javascript true -> 1 and false -> 0

const ans = 5+true+false
console.log(ans)

// case3 :
// false values in javascript // these are the values treated ny JS as false

// false
// 0
// '' // empty string
// null
// undefined

// exmple :
const logid1 = []
const logid2 = {}
const loginDetail=''
const logid3 = logid1[0] // but this is epmty array space is not assigned by any value

if(logid3){
    console.log('please enter')
}
else{
    console.log('get out of here')
}

// but for empty string empty obj it gives true but it gives false for empty string
// if it contains single space then it will treated as true