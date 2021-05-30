/*

==== Http module ====

here we are going to create simple we server using Nodejs Http module 
you can see the Http module Documentatipon in the Nodejs official site 
Using the ExpressJs is the best way but here we are just knowing how it is working

*/

const http = require('http');

const server = http.createServer(); // http.server class inherit from server calsss. server calss has EvenEmitter functionality 
                                                // so http also has the EventEmitter functionality
server.on('connection',(socket)=>{
    console.log("new connection");
});

server.listen(3000);


console.log('Listening on port 3000...');


// this is for simply test purpose.

/*
Note : 

first run on server then check chrome run search => localhost:3000
*/