// Normal function

// This is will be the example for data  Data hiding 

// here "count" will be very secured 

function fun(){
    var count = 10;
    return function increment(){
        count++;
        console.log(count);
    }
}

var ans = fun();
ans();

// for decerement operation this will not good


// the same way for decrement operation this is not good way 
// this is good for any one of operation

// see the next example
