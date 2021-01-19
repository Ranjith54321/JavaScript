// Function Constructor
function fun(){
    var count=0;
    
    this.incre = function(){ // even thought if you use let or var here it will be error
        count++;
        console.log(count);
    }
    this.decre = function(){
        count--;
        console.log(count);
    }
}
// var counter = fun(); // this will show error for this constructor function

var counter = new fun();

counter.incre()

counter.decre();


// this below declaration creates new increment and decrement

var counter2 = new fun();

counter2.incre()

counter2.decre();