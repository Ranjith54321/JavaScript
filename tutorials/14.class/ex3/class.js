class User{
    constructor(name,email){
        this.name = name
        this.email = email
    }
    course_list = [] // no need to decalre var or let or const 

    addCourse(course){
        this.course_list.push(course)
    }
    getInfo(){
        return `Name : ${this.name} Email : ${this.email}`
    }
    getcouserList(){
        return this.course_list
    }
}

let dot = new User("ranjith","dot@gmail.com")
dot.addCourse("C")

console.log(dot.getInfo())

console.log(dot.getcouserList())

// to access this class in another file we need to do the following things

// use this in the test.js file
module.exports = User

// you can give the exports access to the particular property also