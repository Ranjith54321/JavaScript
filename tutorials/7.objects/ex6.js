// Search from Array of Object :

// these are basic 

// find() and findIndex() both needs acxualry function 

const myTodo = ['Buy Bread','Go to Gym','Problem Solving']

//console.log(myTodo.indexOf('Buy bread')) // if not availabke then it will return -1
//console.log(myTodo.indexOf('Buy Bread')) // if there then return's the index 0

// now we see Array of objects

const newTodo = [{
    title : 'Buy Bread',
    isDone : false,
},{
    title : 'Go to Gym',
    isDone : false,
},{
    title : 'Problem Solving',
    isDone : false,
}]

// serach the element in obj Method 1 using foreach type
/*
const index = newTodo.findIndex(function(todo,i){
    console.log(todo) // by using this output you can know where you are
    return todo.title === 'Go to Gym'
}) // it return's the index to the index variable and you can access the index variable to know the index value

console.log(index)

we can define this function in below formate also :*****************

function check(todo){
    return todo.title == 'Go To Gym'
}
console.log(newTodo.findIndex(check))
*/

// same as above but with the help of findIndex inbuild Function
/*
const findtodo = function(mytodo, title){
    const index = mytodo.findIndex(function(todo,i){ // this findindex function works like a for each 
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return mytodo[index]
}

let val = findtodo(newTodo,'Go to gym')
console.log(val) 

*/

// method 2 :

const findtodo = function(mytodo,title){
    const findtitle = mytodo.find(function(todo, i){// this find function works like a for each same like function inside forEach it need two args
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return findtitle
}

console.log(findtodo(newTodo,'go to gym')) // it returns that particular full obj



// ***** note here find is inbuild function

/*
Array.prototype.find()
Returns the found element in the array, if some element in the array satisfies the testing function, or undefined if not found.
*/


function check(todo){
    return todo.title == 'Go To Gym'
}
console.log(newTodo.findIndex(check))

// same for find

function check(todo){
    return todo.title == 'Go To Gym'
}
console.log(newTodo.find(check))