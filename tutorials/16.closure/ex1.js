// closure :

// here we going to see how the java script handles the memory in functions 

// the memory of the particular function will not get deleted while  single reference is available 

// see here

function fun(){
    var name = "ranjith"
    console.log("I'm in fun")
    function sayName(){
        console.log(name)// or this.name 
    }
    return sayName // here not we only return the sayName function but the JS memory keeps the item related to it eg: name and the hole function 
}

let print = fun()

print // see the difference
print() // when you call it in the function way it prints 

