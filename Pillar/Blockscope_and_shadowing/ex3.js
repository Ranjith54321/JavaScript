// Shadowing 
/*
var a = 10;
{
    var a = 20;
} // so this is called shadowing 

// use any variable again in side the block is called shadowing 

// Example for "var" :
    var a = 1;
    {
        var a = 10;   // it shadows the previous value of "a" 
        let b = 20;
        const c = 30;
        console.log(a); // 10
        console.log(b); // 20
        console.log(c); // 30
    }
    console.log(a); // 10

    // Example for "let" :
    let b = 2;
    {
        var a = 10;
        let b = 20;     // it shadows the previous value of "b" 
        const c = 30;
        console.log(a); // 10
        console.log(b); // 20
        console.log(c); // 30
    }
    console.log(b); // 2
    
// Example for "const" :
    const c = 3;
    {
        var a = 10;
        let b = 20;
        const c = 30;       // it shadows the previous value of "c" 
        console.log(a); // 10
        console.log(b); // 20
        console.log(c); // 30
    }
    console.log(c); // 3

*/



// so if you noticed the "var" variable has only one memory block which is global memory so the value only replaced 

// but for "let" and "const" the different block has diffent value

// instead of block the for the function's also it has same rule

// eg :

const c = 3;

function fun(){
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
fun();
console.log(c);