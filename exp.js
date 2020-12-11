const express = require('express')
const app = express()

app.get('/', (req,res)=>{
  res.send('I am learning programinng')
})

app.listen(3000)
