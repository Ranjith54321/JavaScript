// private properties and getters and stters
// variavle name starts with # symbol is private properites 
class User{
    constructor(name,email){
        this.name = name
        this.email = email
    }
    #course_list = [] // no need to decalre var or let or const 
    // private variables access in the class also starts with # symbol
    setCourse(course){
        this.#course_list.push(course)
    }
    getInfo(){
        return `Name : ${this.name} Email : ${this.email}`
    }
    getcouserList(){
        return this.#course_list
    }
}

let dot = new User("ranjith","dot@gmail.com")
dot.setCourse("C")

console.log(dot.getInfo())

console.log(dot.course_list) // this will say undefined bcoz you can directly access the private properties

console.log(dot.getcouserList())