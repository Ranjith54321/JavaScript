// here local storage is nothing but variable based not a sal or something

// localStorage has very few limited functionalities

// localStorage data wil avilable until you delete it from the coding or clear site data

// to see the local storage on web goto-> inspect->apllication-> localstorage
// it is always a key value pair

localStorage.setItem('hero','Dot')// add item

console.log(localStorage.getItem('hero')) // it will print the ans even though the data is hided bcoz it is already loded on the browser so it avilable on the broswer data
                                                // it will be there util you clear site data or write code to delete that
localStorage.setItem('todo','work out') // add item

// for removeing single item

localStorage.removeItem('hero') // remove single item

console.log(localStorage.getItem('hero'))  // get item


console.log(localStorage.getItem('todo')) // get item


// for remove all data from local storage
localStorage.clear()

console.log(localStorage.getItem('todo')) // get item