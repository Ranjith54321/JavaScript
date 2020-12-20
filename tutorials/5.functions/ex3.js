let course = function(name,count){
    this.name = name
    this.count = count
    this.getcount = function(){
        console.log(`the course count is ${this.count}`)
    }
}





// this above function is act like a class we are going to create object for this function so the data will be remain same

let ranjith = course("ranjith",22)
//ranjith.getcount()

// the above one is works find but we are not storing data so getcount() will show the error

let dot = new course("dot",1)

dot.getcount()

//ranjith.getcount()