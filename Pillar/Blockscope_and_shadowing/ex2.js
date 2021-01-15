// Block Scope 
/*
    let and const variable's have only accessable in side particular block 

    //eg:
    {
        let a = 10;
        const b = 20;
        var c = 30;
        console.log(a);
        console.log(b);
        console.log(c);
    }
    console.log(a); // not accessable
    console.log(b); // not accessable
    console.log(c); // accessable

    // "let" and "const" are stored in different  memory  block

    // but "var" is stored in global memory so it can be accessable every where
*/
// so here variable's "a" and "b" can not accessable out side of the block which is called Block Scope