const express = require('express')
const Route = express.Router()
const creds = require('../../DataBase/creds')

//Get all creds
Route.get('/',(req,res)=>{
    res.json(creds)
})

//Get single cred

Route.get('/:id',(req,res)=>{
    const found = creds.some(cred=> cred._id === parseInt(req.params.id))
    if(found){
        const cred = creds.filter(cred=> cred._id === parseFloat(req.params.id) )
        res.json(cred)
    }else{
        res.status(400).json({msg:`credential with ${req.params.id} not found`})
    }
   
})

//Post cred
Route.post('/',(req,res)=>{
    const newCred = {
        _id:Math.floor(Math.random()*1000),
        name:req.body.name,
        email:req.body.email,
        password:1234
    }
  creds.push(newCred)

  if(!req.body.name || !req.body.email){
      res.status(400).json({mssg:'The form need to be fill'})
  }else{
      res.json(creds)
  }

})

module.exports = Route
