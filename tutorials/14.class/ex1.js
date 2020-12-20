class Student{
    // here default constructor is created when we create obj for it 
    constructor(firstname,lastname,mark){ // here constructor is default function name
        this.firstname = firstname
        this.lastname = lastname
        this.mark = mark
    }
    getName(){   // note here inside class no need to add key word function() for function's
        return `${this.firstname} ${this.lastname}`
    }
    editName(firstname,lastname){
        this.firstname = firstname
        this.lastname = lastname
    }
}

// if you create obj it defaultly call the 0-arg constructor if you pass any argm's then you need to create for it

const ranjith = new Student("Ranjith","Dot",46)

console.log(ranjith) // see the obj

console.log(ranjith.getName())

ranjith.editName("ranjith","dot_46")
console.log(ranjith.getName())



// here you can see this will show undefined
const ram = new Student()

console.log(ram) // see the obj
console.log(ram.getName()) 


