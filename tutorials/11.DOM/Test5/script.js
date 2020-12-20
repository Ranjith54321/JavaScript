document.querySelector('#input1').addEventListener('input',(event)=>{
    console.log(event.target.value)
})

function myValidation(){
    const val = document.getElementById('input2').value
    if(isNaN(val) || val<1 || val<20){ // isNaN is inbuild function which tells whether the value is number or not is not a number then returns true or returns false
        console.log("this is not a valid input"+val)
    }else{
        console.log(`you enterd ${val}`)
        alert(`you enterd ${val}`)
    }
}