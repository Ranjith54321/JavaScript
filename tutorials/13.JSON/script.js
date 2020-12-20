const student = {
    name : "ranjith",
    rollno : "17EUIT125",
    age : 21,
    isactive : true,
}

// --> convert obj to string

var objtostring = JSON.stringify(student)

//localStorage.setItem('student',objtostring)
// aftre load and run you can hide bcoz to avoid restorgae on the browser

console.log(typeof objtostring)

// --> convert string to obj

var toJSONobj = JSON.parse(objtostring)

console.log(typeof toJSONobj)

console.log(toJSONobj.name)




/*
    As you know JSON is in the form of Java Script Oject Notation 

    used to pass the data between servers and client mangoDB is also stores in the form of JSON


    And this is how API work's internally
*/