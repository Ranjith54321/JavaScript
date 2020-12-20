//var ul; // inorder to use multiple place i declared here
var ul = document.getElementById('list')
var li


let add = document.getElementById('add');
add.addEventListener('click',addbut);

let remove = document.getElementById('remove');
remove.addEventListener('click',rembut);

function addbut(){
   // console.log("you clicked add button")
   var input = document.getElementById('input')
   var item = input.value
   ul = document.getElementById('list')// not neccessarry bcoz you already get above 
   var textnode = document.createTextNode(item)

   if(item===''){
       alert('enter the valid ToDo')
   }
   else{ 
       // insise ul -> li -> text -> label
       //create li
       li = document.createElement('li')

       //create checkbox
       var checkbox = document.createElement('input')
       checkbox.type = 'checkbox'
       checkbox.setAttribute('id','check')

       //create label
       var label = document.createElement('label')
       label.setAttribute('for','item')

       // add these eleemnts on web page

       ul.appendChild(label)
       li.appendChild(checkbox)
       label.appendChild(textnode)
       li.appendChild(label)
       ul.insertBefore(li,ul.childNodes[0])

       // this is for insert effect
       setTimeout(()=>{
           li.className = 'visual'
       },2) // it will add after 2milli secods

       input.value = ''
   }
}

function rembut(){
     li = ul.children // here ul is returned as in the Array form
    //console.log(li)
    for(let i=0;i<li.length;i++){
        const ele = li[i] // here each li is also returned in the form of array bcoz is you see inside it contains various tag's so it consider as 
        //console.log(ele)
        while(li[i] && li[i].children[0].checked){
            ul.removeChild(li[i])
        }
        // reove all code
        // while(li[i] && li[i].children[0]){
        //     ul.removeChild(li[i])
        // }
    }
}