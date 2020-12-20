

document.querySelector('.myform').addEventListener('submit',(event)=>{
    let username = event.target.username.value
    let pass1 = event.target.pass1.value
    let pass2 = event.target.pass2.value
    console.log("username : "+username)
    console.log("pass1 : "+pass1)
    console.log("pass2 : "+pass2)
    //if(pass1 == pass2)
        //alert("please enter")
    ///rtelse
        //alert("password is incorect")
    // event.target.username = ''
    // event.target.pass1.value = ''
    // event.target.pass2.value = ''
})