/*
    DOM -> Document Object Model

    --> seee the video : https://www.youtube.com/watch?v=GkXAGe7SLm0&list=PLIFaUSlZr0p9nvXYn2xK84CGH7s4KZi-o&index=31

    it is nothing but here we talking about HTML in html every thing in the form of document and thir childern 

    in html you can see

    <html>
        <head>  -> childern of html tag
            <title>Document</title> -> childern of head tag
        </head>
        <body>  -> childern of html tag
            <h1></h1> -> childern of html body tag
        </body>
    </html

*/

// you can access the particular property of object from the java script code 

console.log(document.getElementById("h")) // this is also will show in your browser console
console.log(document.title)

document.title = "Ranjith Dot" // like you can change the content of the html  file

console.log(document.title)
/* 
video link : https://www.youtube.com/watch?v=nkOL-mZjq60&list=PLIFaUSlZr0p9nvXYn2xK84CGH7s4KZi-o&index=32
 
in browser click inspect and select console and run commands there

console.log(document.title)  [ -> mean's output
-> VM92:1 Document
-> undefined
console.log(document.body)


// here we use getElementsByTagName
var  title = document.getElementsByTagName("h1")
 // now print the title
 title



*/

// when you need too use this watch the video

// where you place you JavaScript file in your html file 

/*
    if you have no operation which is handled by JS file then put the JS file in the head Tag  tag itself it will be more fast

    but of you handle any operation that in the body tag then you should place or load the  js file in the body tag then only the changes appear

*/