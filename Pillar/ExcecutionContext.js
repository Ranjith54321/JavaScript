/* 
    JavaScript has Excecution Context 
    
    two blocks in excecution context
    
    1.) Memory block                           2.) Code block

    -> when ever you execute the code first memory block will work then only code block will execute

    -> JavaScript is Synchronous single threaded language i.e, only one operation happens at a time

    -> in memory block for the varibles 1st it will allocate undefined.

    -> for functions (not a var or let  function) the memory will store the whole funcion (like whole string) 
            eg : function fun() = {
                let a = 10;
                console.log(a);
            }   // fun will contains the whole content

    -> ******JavaScript Executes based on call stack***

    -> *****JS has separate call stack for the function***

    -> inside call stack only JS code execute line by line 

    -> at the end the call stack get deleted


    see in my note book for diagram



        at the same time you need to see the SCOPE CHAIN , SCOPE AND LEXICAL ENVIRONMENT in my note





*/
