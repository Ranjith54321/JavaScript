// Anonymous function
// eg: 1 

let fun = function(value){ // funtion without name is called Anonymous function (i.e function that is declared for a variable)
    console.log(value)
}

function mainfun(fun,value){ // getting another function as a parameter then use that function
    fun(value)
}

mainfun(fun,"hi man")

// eg : 2  you can directly declare and pass the function in the calling parameter field itself

function mainfun2(fun,value){ 
    fun(value)
}
mainfun2(function(value){onsole.log(value)},"declaring in calling method itself")

