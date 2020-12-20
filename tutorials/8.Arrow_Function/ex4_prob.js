// problem with arrow function

const obj = {
    name : 'Ranjith',
    age : 21,
    detail : function() {
        return `hi this is ${this.name} and my age is ${this.age}` // remeber without this jey word it will show error
    },
}


//console.log(obj.detail())

// now replace the fuction with => symbol and thee it will show error bcoz arrow fucntion can't include that fucntionality

// the above is told by hitesh but it works for me 

const obj2 = {
    name : 'Ranjith',
    age : 21,
    detail : () => `hi this is ${this.name} and my age is ${this.age}  ..bye` , // incase if not works use obj2.name** // but for mw it works fine
}

console.log(obj2.detail())

// the vide i saw was 2 years old so now node developers maybe fixed it


// redux : (like dectionary) // not told extra only he said redux and this example

const func = () => ({key : 'value'})