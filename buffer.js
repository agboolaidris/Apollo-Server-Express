const fs = require("fs");
const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'})
    // const readStream = fs.createReadStream(__dirname+'/index.html','utf8')
    // readStream.pipe(res)
    const myObj ={
        name:'Idris',
        job:'web developer',
        age:23
    }

    res.end(JSON.stringify(myObj))

})
server.listen(3000, '127.0.0.1')
console.log('listen to port 3000')
