// in this excercise we going to change the content of the paragraph tag using JS file using loop


// here querySelectorAll selects all of the element that are related to mentioned class or tag in the form of array
// if you use simple querySelector then it will return simply the first one 


var mypelement = document.querySelectorAll('p')

mypelement.forEach(function(p){
    p.textContent = 'thi is changed using forEach loop'
})

// for remove all the p tag simle use 
/*
mypelement.forEach(function(p){
    p.remove()
})*/

mypelement.forEach((p)=> p.textContent = 'this is changed using arrow function')