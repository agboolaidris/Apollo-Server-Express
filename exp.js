const express = require('express')
const app = express()
app.set('view engine','ejs')

app.get('/', (req,res)=>{
  res.sendFile(__dirname + '/index.html')
})

app.get('/contact',(req,res)=>{
  res.sendFile(__dirname + '/contact.html')
})

app.get('/profile/:id',(req,res)=>{
    const data = {
      age:12,
      job:'MERN',
      hobbies:['reading','coding','sleeping']
    }
    res.render('profile',{person:req.params.id, data:data})
})

app.listen(3000)