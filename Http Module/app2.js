// Ex :2 here we are gping to design a simple server which shows some simple info

const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Hello this is ranjith Dot.....');
        res.end();
    }
    if(req.url === '/me/about'){
        res.write(JSON.stringify(['Engineer','Automobile Enthusiast','Coder']));
        res.end();
    }

    // Basically this every response for request is called routes, to handle every request in a linear way is very hard to handle here in the callback function
});

server.listen(3000);

console.log('Listening on port 3000....');

// To handle this routes Express gives the clean way. Internally Express is build with Nodejs 'http' module