// closure :

// here we going to see how the java script handles the memory in functions 

// the memory of the particular function will not get deleted when single reference is available 

// see here

function fun(){
    var name = "ranjith"
    console.log("I'm in fun")
    function sayName(){
        console.log(name)// or this.name 
    }
    return sayName // here not we only return the sayName function but the JS memory keeps the item related to it eg: name and the hole function 
}

let print = fun()  // "I'm in fun" print bcoz we are calling here

print // see the difference // which contains just reference of sayname
print() // when you call it in the function way it prints 

