let course = function(name,count){
    this.name = name
    this.count = count
    this.getcount = function(){
        console.log(`the course count is ${this.count}`)
    }
}

// prototype

// by using prototype you can declare function that related to the particular entry of the object

course.prototype.getname = function(){
    console.log(`your name is ${this.name}`)
}

// when ever you use new key word that , It will search the prototype section and update it alsos



let ranjith = new course("ranjith",22)
ranjith.getcount()
ranjith.getname()


let dot = new course("dot",1)

dot.getcount()
dot.getname()
