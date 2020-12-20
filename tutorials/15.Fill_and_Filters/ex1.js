let arr1 = [11,2,3,8,4,6,5]

console.log(arr1)

// to replace all
arr1.fill('hi') 

console.log(arr1)

// to replace with starting index 

arr1.fill('h2',2) 

console.log(arr1)

// to replace with start index and end index is inclusive

arr1.fill(9999,2,5) 

console.log(arr1)


// -------------Filter --

// it returns value in the form of array

let arr2 = [22,66,45,98,32,15,654,55,75]

let ans = arr2.filter((num)=>{
    return num>50
})

console.log(ans)