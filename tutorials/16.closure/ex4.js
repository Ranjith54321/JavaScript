// continuese from ex3

function x(){
    var a = 10;
    function y(){  
        console.log(a);
    }

    a=999;

    return y;
}

var b = x();

b(); // here you thought the otput will be 10 but run and see

/*
    op : 999

    because the clouser only stores the reference of the variable not the value
*/