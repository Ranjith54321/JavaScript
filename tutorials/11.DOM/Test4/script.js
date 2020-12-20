// in this example we going to see about  event listeners


document.querySelector('button').addEventListener('click',(event)=>{
    event.target.textContent = 'I was Clicked'
    console.log('this button got clicked')
})

// there are lot more funcitions are there in the addEventListeners and event