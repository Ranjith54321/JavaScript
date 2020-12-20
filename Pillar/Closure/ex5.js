// continoues from ex4

function x(){
    var a = 10;
    return function y(){ // you from here also 
        console.log(a);
    }
    
    a = 999;
}

var b = x();

b();

/*
    here op : 10;

    because the function returns the before the reassign of a 
    so the the condtion is not reached the reference contains only the value 10
*/