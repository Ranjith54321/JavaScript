// here we see the methods inside the objects

var myTodo = {
    day : 'monday',
    meetings : 0,
    meetdone : 0,

    addMeeting : function(num) { // even though you are using var using this only you can access the object members otherwise it shows error
        this.meetings = this.meetings + num; // this rule is both for var and let object creation
    }, // use this key word that is must you can modify and run this you can under stand

    summary : function() {
        console.log(`you have ${this.meetings} today`) // where eve you access the obj members you should access with the help of this keu word
    }
}
myTodo.addMeeting(5)
myTodo.summary()



