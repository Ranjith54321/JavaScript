// setTimeout + Closures
// task print 1 to 5 with "i" sec delay of each 

/*
// normal implementation for refresh
function x(){
    var i=1;
    setTimeout(function(){
        console.log(i);
    },1000);
    console.log("hi");
}
x();
*/

// now here task 
/*
function x(){
    for(var i=0;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },1000);
    }
    console.log("hi");
}
x();
// op :
hi
6
6
6
6
6
6

-> as you know if async task comes js skips that task, do other tasks and come back to do the asyc task
-> here after first for loop will finished its execution then print "hi" after that async code work 
-> here closure is working how is it stores the i value 
-> but here var is accessable for all block so the in the memory address the last value that 6 is fixed
-> that is why the clouser contains the same value while printing

*/

// solution 1 : use let instead of var becase let is block scope so every i block(in for loop) new i is created so in address different value is there
/*
function x(){
    for(let i=0;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },1000);
    }
    console.log("hi");
}
x();
// op :
hi
0
1
2
3
4
5
*/

// solution 2 : don't use let sol : use async function inside the function and pass the value

function x(){
    for(var i=0;i<=5;i++){
        function show(x){ // now this block variable is only for this block another block has different memory and value 
            setTimeout(function(){
                console.log(x);
            },1000);
        }
    show(i);
    }
    console.log("hi");
}
x();

/*
//op :
hi
0
1
2
3
4
5

*/