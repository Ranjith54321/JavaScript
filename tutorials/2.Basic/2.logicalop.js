// logical operators

// && -> and

// || -> or

// ! -> not

let login = true;

let customer = true;

if(login && customer){
    console.log("welcome to the store")
}
else if(login && !customer){
    console.log("please join as customer")
}
else if(login || customer){
    console.log("welcome who are you")
}