const express = require('express')
const path = require('path')
const handlebars = require('express-handlebars')
const logger = require('./Middleware/logger')

//init express
const app = express()

//template engine middleware

app.engine('handlebars', handlebars({defaultLayout:'main'}))


//middleware
//app.use(logger)

//Body Parser middleware

app.use(express.json())
app.use(express.urlencoded({extended:false}))




//static folder
app.use(express.static(path.join(__dirname,'Static')))

//creds Api

app.use('/api/creds', require('./Route/Api/creds'))



//assign port to app
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})