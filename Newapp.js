/*const http1 = require('http');
const hostname1 = '127.0.0.1';
const port1 = 3000;
const server1= http1.createServer((req1,res1)=>{
    res1.statusCode=200;
    res1.setHeader('Content-type','text/plain');
    res1.end("Hello Good Morning");
});
server1.listen(port1,hostname1,()=>{
    console.log("Server started on port "+port1);
});*/

const http = require('http');
const fs=require('fs');
const hostname = '127.0.0.1';
const port = 4000;
fs.readFile('index.html',(err,html)=>{
    if(err){
        throw err;
    }
    const server= http.createServer((req,res)=>{
        res.statusCode=200;
        res.setHeader('Content-type','text/html');
        res.write(html);
       res.end();
});
server.listen(port,hostname,()=>{
    console.log("Server started on port "+port);
});
});