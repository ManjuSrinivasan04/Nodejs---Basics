//{1.first node code}
function sayHi(name)
{
    console.log("Hi! "+name);
}
sayHi("Manju");
//node dont have objects like window , document

//node core --{2.nore module system}

//global scope functions and variables will lead to overriding problems
//reliable and maintainable app we avoid global scope so using modules
//files inside one module is private before using them we need to make it public(by exporting it)
console.log(module);
//in node every file is a module and variables are scoped to that module

//{4.Loading a module}

const loger=require('./logger'); //require func returns objects exported from the target module(logger)
console.log(loger);
//** loger.log('Welcome');

//{5.Path module}

const path=require('path');
let pathobj=path.parse(__filename);
console.log(pathobj);

//{6.OS module}

const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//** console.log("Total Memory: "+ totalMemory);

//Template string
//ES6 / ES2015 : ECMASCRIPT 6

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

//{7.file module}

const fs=require('fs');
const files=fs.readdirSync('./');//calls last
console.log(files);
fs.readdir('./',function(err,files){
    if(err)console.log("error",err);
    else console.log("result",files);
});

//{8.Event module}

const EventEmitter=require('events')//EvenEmiter is a class

//const emiter=new EventEmitter();
//register a listner
/*emiter.on('messagelogged',(arg)=>{
    console.log("Listner called",arg);
});*/

//loading logger module
//const mod=require('./logger');
//console.log('message');//not calling event listner only prints message 
//the reason is bcoz we work with different event listners two emitter objects in app.js and logger.js

//emiter.emit('messagelogged',{id:1,url:'http://'});//used to raise an event
//listener is a function that is called when an event is raised

const Logger = require('./logger');
const obj=new Logger();
obj.on('messagelogged',(arg)=>{
    console.log("Listner called",arg);
});

obj.log('message');

//{9. HTTP module}

const http=require('http');
const { Socket } = require('dgram');
const server=http.createServer();
server.on('connection',(Socket)=>{
    console.log("New Connection");
});

const serve=http.createServer((req,res)=>
{
    if(req.url==='/'){
        res.write("hello");
        res.end();
    }
    if(req.url==='/api/courses'){
        res.write(JSON.stringify([1,2]));
        res.end();
    }
});

server.listen(3000);
console.log("Listnening port 3000");