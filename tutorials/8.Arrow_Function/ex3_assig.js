// create 7 array of obj with titile and isdone then print only the *title* of the obj which are not done



const myTodo = [{
    title : 'sunbath',
    isDone : false,
},{
    title : 'problem_solving',
    isDone : true,
},{
    title : 'JavaScript',
    isDone : true,
},{
    title : 'Buy Bread',
    isDone : true,
},{
    title : 'Go to Gym',
    isDone : false,
},{
    title : 'Problem Solving',
    isDone : true,
}]



// step 1 : using filter function to ectract the array obj with who are false
const notdonetitle = myTodo.filter((todo,i)=>todo.isDone === false)

notdonetitle

// use forEach
// step 2 : now iterate the false obj thwen extract only the title with thw help of forEach 
notdonetitle.forEach((val,i)=>console.log(val.title))


// above i'm using arrow function

