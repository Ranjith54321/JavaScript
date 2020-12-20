
class User{
    constructor(name,email){
        this.name = name
        this.email = email
    }
    #course_list = [] // no need to decalre var or let or const 

    addCourse(course){
        this.#course_list.push(course)
    }
    getInfo(){
        return `Name : ${this.name} Email : ${this.email}`
    }
    getcouserList(){
        return this.#course_list
    }
    static loggin(){
        console.log("loggin from parent class")
    }
}

class sub extends User{
    constructor(name,email){
        super(name,email)
    }
    loggin(){
        console.log("loggin from sub class")
    }
}
let dot = new sub("ranjith","dot@gmail.com")
dot.addCourse("C")

dot.loggin()

console.log(dot.getInfo())

console.log(dot.getcouserList())



