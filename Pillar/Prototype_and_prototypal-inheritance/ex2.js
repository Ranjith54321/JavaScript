// here we see the objects

let obj = {
    name : "Ranjith",
    city : "CBE",
    getdetail : function(){
        console.log("Hi I'm "+this.name+"  and I'm from "+this.city);
    }
}

obj.getdetail(); // if you run obj.getdetail on browser you will get the content of that function

// arr.__proto__ // returns object of properties that are attched to the object
// arr.__proto__.__proto__ // returns null

// you can see the protypes bye using Object.__proto__ too

let obj2 = {
    name : "Dot",
}

// obj2 = obj // the reference will be change not the property
obj2.__proto__ = obj;
// now you run this prg in the browser and see the obj2.__proto__ it will show the obj because we assigned proto for that instead of js given proto
//console.log(obj2.__proto__); // see this in browser
obj2.getdetail();

