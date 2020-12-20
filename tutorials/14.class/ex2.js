// inheritance and method overriding

class Student{
    constructor(firstname,lastname,mark){ 
        this.firstname = firstname
        this.lastname = lastname
        this.mark = mark
    }
    getName(){
        return `${this.firstname} ${this.lastname}`
    }
    editName(firstname,lastname){
        this.firstname = firstname
        this.lastname = lastname
    }
}
// here inhertitance single level
class Staff extends Student{
    constructor(firstname,lastname,mark,subject){
        super(firstname,lastname,mark) // this is must otherwise it will show error
        this.subject = subject
    }
    // now over ride the method
    getName(){
        return `${this.firstname} ${this.lastname} and i learning ${this.subject}`
    }
}

const ranjith = new Staff("Ranjith","Dot",46,"JavaScript")

console.log(ranjith) // see the obj

console.log(ranjith.getName())

ranjith.editName("ranjith","dot_46")
console.log(ranjith.getName())





