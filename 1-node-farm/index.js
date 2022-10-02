const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');

////File  read and Write
/* const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
 
console.log(textIn)

const textOut = `This is what we know about the avocado: ${textIn}.\n Created on ${Date.now()}`;

fs.writeFileSync('./txt/output.txt', textOut)

console.log('File Written') */


///////////////////

////    SERVER /////////
const server =http.createServer((req, res)=>{
    // console.log(req.url);
    // console.log(req);
    const  patName = req.url;
    if(patName === '/' || patName==='/overview'){
        res.end('This is the Overview');
    }
    else if(patName === '/product'){
          res.end('This is the Product');
    }
    else{
        res.end("Page Not Found")
    }
    let a;
    // abu huraira 
    res.end('Hello From The Server')
}); 
server.listen(8000,'127.0.0.1', ()=>{
    console.log('Listening to request on port 8000')
})

