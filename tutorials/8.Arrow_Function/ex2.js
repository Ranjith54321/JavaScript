// for undestand clearly this must see in 7.objects ex6 and Arrow functions ex1

const myTodo = [{
    title : 'Buy Bread',
    isDone : true,
},{
    title : 'Go to Gym',
    isDone : false,
},{
    title : 'Problem Solving',
    isDone : true,
}]
// by using filter we can get the output in the form of array  but in find() and findIndex() we get only one value

// it return's only true isDone objects

const onlydone = myTodo.filter((todo) => { // it works like a foreach loop
    return todo.isDone === true
}) // here filter is inbuild function if you change the name it won't work

console.log(onlydone) // it returns all the obj which are true 

// it odes not return onlyone but all the obj which are done

// same code with one line ****

const onlydone2 = myTodo.filter((todo) => todo.isDone === true)

console.log(onlydone2)

// you can notice the output it returns in the form of array

/*Array.prototype.filter()
Returns a new array containing all elements of the calling array for which the provided filtering function returns true.*/

// see the assingment in ex3  assingment