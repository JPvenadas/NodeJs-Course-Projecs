//import the http global module
const http = require('http');

/*created a server which have a callback function 
that will be executed whenever someone made a request*/
const server = http.createServer((req, res)=>{
    console.log("Oops! someone made a request")
})

/*make the server listen to the requests to the
port you have indicated (for this instance
,I use 3000). the callback function will be executed
whenever the server starts*/
server.listen(3000, 'localhost', ()=>{
    console.log("Listening at port 3000")
})