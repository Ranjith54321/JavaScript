// example 2 on todo

let myTodo = {
    day: "Monday",
    meetings: 0,
    meetDone: 0,
}

let addMeeting = function(todo,meet=0) {
    todo.meetings = todo.meetings + meet
}

function meetDone(todo,meet=0) {
    todo.meetDone = todo.meetDone + meet
}

function resetDay(todo) {
    todo.meetings = 0
    todo.meetDone = 0
}

console.log(myTodo)

// if you pass the myTodo in from function the changes reflect in all the places

addMeeting(myTodo,10)

meetDone(myTodo,8)

console.log(myTodo)

 resetDay(myTodo)

console.log(myTodo)
