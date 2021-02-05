// Garbage collection and removeEventListeners  :

/*

    when ever you use Event Listeners it creates callback function and closures 

    these are takes lot of memory it affects the performance 

    so for better performance always try to reduce the event listeners 




*/



    // #Concorency model :

    console.log("start");

    setTimeout(function(){
        console.log("call back")
    },50000);

    console.log("end");

    // here lets consider you have 1 million lines of code it will take 10secs to complete
    // but we need to print the "call back" after 5 secs

    // so after 5 secs call back function is move to call back queue then it will until call stack to be empty 
    // so this is called CONCORENCY MODEL


