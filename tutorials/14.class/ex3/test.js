
const user = require("./class.js") // access the User class here // variable name can be anything

let ranjith = new user("ran","ran@gmail.com")

ranjith.addCourse("Java")
ranjith.addCourse("DataStructures")

ranjith.getInfo()

let arr = ranjith.getcouserList()

// iterate array using forEach loop

arr.forEach((cur)=>console.log(cur))