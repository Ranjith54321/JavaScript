// see the last line 

let user = {
    firstName : "ranjith",
    lastName : "dot",
    role : "Admin",
    age : 21,
    getinfo : function(){
        console.log(`
        First Name is ${this.firstName}
        Last Name is ${this.lastName}
        Role is ${this.role}
        Age is ${this.age}
        `)
    },
}

//javaScript is Object based Language if you run this above object on the browser and see JS provides many protitype functionalities for the ->
    // -object method 

    let doc = {
        firstName : "doc",
        lastName : "46",
        role : "racer",
        age : 46,
    }


    // now we are going to print the doc object details using user object getinfo method using bind() findction 
    // bind returns the reference so use that reference you can work what you need

    user.getinfo()

    let docinfo = user.getinfo.bind(doc) // now doc details are applied on getinfo method and returns the reference

    docinfo() // it will show the op
    // user.getinfo.bind(doc)() // above simplified way

    // docinfo -> reference for the getinfo with doc object details
    // docinfo() -> method calls the getinfo data


    //-------------call()---------same as bind() but-------------

    // call does not return's the reference it simply printf the value
    
    user.getinfo.call(doc)


    /*************************** very very very important note or rule for the bind() call() method
    
    you can use or borrow other obects method if the both objects conatins the same kind of variables *************
    
    */