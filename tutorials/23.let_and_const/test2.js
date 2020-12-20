// let and const Block scope and shadowing 

// here block maye a function or simply a block ar anything 
// video link : https://youtu.be/lW_erSjyMeM?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP
var a = 10;
{
    var a = 20;
    let b=50;
    const c = 60;
    console.log(a);
    console.log(b);
    console.log(a);
}
    console.log(a); // here gloabl variable a value(10) is taken here
    ///console.log(b); // both let and const b and c makes error here
    //console.log(c);

    /*
     from out side block to in side block access ->  var to var //   let to let // const to const 

                                            (or) var to let // var to const
                                            but not should -> let to var // const to var 


     eg: 

     let a = 10; 

     function x(){
         let a = 99; 
        console.log(a);
     }
     console.log(a);
    */