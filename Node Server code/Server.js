//import the http global module
const http = require('http');
//import the fs module to read the html that we will be sent as a response
const fs = require("fs")



/*created a server which have a callback function 
that will be executed whenever someone made a request*/
const server = http.createServer((req, res)=>{

  //this is the variable containing the path that we will reading and will be sent as a response
  let path = "./Pages"
  //set the content type to html
  res.setHeader("Content-Type", "text/html")

  //below are the conditionals that is set to send different html files at different url request
  //if the url is /index of / send the html file
  if(req.url == "/" || req.url == "/index"){
    path += "/Index.html"
  }
  //if the url is /about send the about.html
  else if(req.url == "/about"){
    path += "/about.html"
  }
  //if the url is not recognized send the 404.html
  else{
    path += "/404.html"
  }

  fs.readFile(path, (err, data)=>{
    if(err){
        console.error("Error reading the file: " + err)
        res.end()
    }
    else{
        res.end(data)
    }
  })
})





/*make the server listen to the requests to the
port you have indicated (for this instance
,I use 3000). the callback function will be executed
whenever the server starts*/
server.listen(3000, "localhost", ()=>{
    console.log("Listening at port 3000")
})