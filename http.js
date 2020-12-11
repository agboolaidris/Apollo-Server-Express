const http = require('http')
const server = http.createServer((req,res)=>{
    console.log(`the request was make on port : ${req.url}`)
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('I love Coding ')
})

server.listen(3000,'127.0.0.1')
console.log('listen to port 3000....')
