
var num = ['one','two','three','four','five','six']

//console.log(num)

// start operation 

// 1.) shift --> it shift or delete the first data of the array

// console.log(num.shift())
// console.log(num)

// 2. unshift --> here u can pass the value and it will add it at first index of the array

// console.log(num.unshift("new"))
// console.log(num)

// --> end operation 

// 1.) pop() -->like stack operation

//console.log(num.pop())

// 2. push() -->
        // num.push('seven')
        // console.log(num)

// --> Middle operation

//1.) splice(starting_index,num_of_elements, new_value) 
num.splice(2,1,'new')
console.log(num)

num.splice(4,2,'empty')
console.log(num)

num.splice(5,2,'extra')
console.log(num)