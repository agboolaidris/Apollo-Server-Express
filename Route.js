const http = require('http')
const fs = require('fs')
 const server = http.createServer((req,res)=>{
    if(req.url === '/home' || req.url ==='/' ){
        const streamRead = fs.createReadStream(__dirname+'/index.html')
        res.writeHead(200,{'Content-Type':'text/html'})
        streamRead.pipe(res)
    }else if(req.url ===  '/contact'){
        const streamRead = fs.createReadStream(__dirname+'/contact.html')
        res.writeHead(200,{'Content_type':'text/html'})
        streamRead.pipe(res)
    }else if(req.url === '/api/idris/'){
        res.writeHead(200,{'Content-Type': 'application/json'})
        const obj = {
           name:'Idris',
           age:17,
           job:'developer'
        }

        res.end(JSON.stringify(obj))
    }else{
        const streamRead = fs.createReadStream(__dirname+'/error.html')
        res.writeHead(200,{'Content_type':'text/html'})
        streamRead.pipe(res)
    }
    
 })
 server.listen(3000,'127.0.0.1')
console.log('listen to port 3000')
