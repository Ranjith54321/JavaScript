console.log("I'm in console");

function sub(num){
    return num - 2;
}

function add(num){
    num = num + 2;
    return sub(num);
}

console.log(add(9));


/*
  On page inspect see the source and debug at first line and see the 
  call stack and and scope local storage

  here see in call stack how Global Execution context is behave 

  and also see the other functions how push and gets poped

*/