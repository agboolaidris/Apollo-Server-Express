const express = require('express')
const path = require('path')
const creds = require('./DataBase/creds')
const logger = require('./Middleware/logger')

//init express
const app = express()


//middleware
//app.use(logger)


//Get all creds
app.get('/api/creds',(req,res)=>{
    res.json(creds)
})

//Get single cred

app.get('/api/creds/:id',(req,res)=>{
    const found = creds.some(cred=> cred._id === parseInt(req.params.id))
    if(found){
        const cred = creds.filter(cred=> cred._id === parseFloat(req.params.id) )
        res.json(cred)
    }else{
        res.status(400).json({msg:`credential with ${req.params.id} not found`})
    }
   
})


//static folder
app.use(express.static(path.join(__dirname,'Static')))



//assign port to app
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})