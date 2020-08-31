//{3.Creating a module}
//var x=;
const EventEmitter=require('events')//EvenEmiter is a class
//no longer needed const emiter=new EventEmitter();
class Logger extends EventEmitter{
     log(msg){
        //send an http request
        console.log(msg);
        this.emit('messagelogged',{id:1,url:'http://'});
    }
}

let url="http://mylogger.io/log";
/*function log(msg){
    //send an http request
    console.log(msg);
    emiter.emit('messagelogged',{id:1,url:'http://'});
}*/
//visible outside
//module.exports.log=log;
//module.exports=log;
//module.exports.endPoint=url;

module.exports=Logger;

console.log(__filename);
console.log(__dirname);

//node does not execute our code directly as above it wrappes into the function format
//function(exports,require,module,-filename,-diename){}//This is a MODULE WRAPPER FUNCTION
