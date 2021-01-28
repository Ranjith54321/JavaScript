// Closures along eith Event Listeners (Event listeners contains call back function) 

// here we implement button clicked count function
/*
// step 1 : normal implementation

let count = 0;
document.getElementById("clickme").addEventListener("click",function(){
    console.log("I'm clicked", ++count);
})

*/

// with data encapsulation (secured way) :

function countbutton(){
    let count = 0;
    document.getElementById("clickme").addEventListener("click",function abc(){
        console.log("I'm clicked", ++count);
    });
}
countbutton();

/*
    Important things to see in chrome dveloper tools :

    1-> so this is cousures so you can see the variables in the scope secrtion in chrome deveoper tools 
            put debugger on consolelog line and see the callstack to find the callback function
            at the same time you can see the scope section to see the closure details like variables and functions
    
    2-> you can go to Elements -> click the button line in html (on chrome) -> See the Elements Listeners section 
                                                then find the funtion details there 
            in this Elements see the scope you can find more info
*/