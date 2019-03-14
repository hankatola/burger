// imports & variables
const express = require('express')
const handlebars = require('express-handlebars')
const burger = require('./models/burger.js')
const app = express()
const PORT = process.env.PORT ||8080

// app config
app.engine('handlebars',handlebars({defaultLayout: 'main'}))
app.set('view engine','handlebars')

//  routes
app.get('/',(req,res)=>{
    // page
    res.render('index',{'i':true})

})

app.listen(PORT,()=>{console.log('Listening on Port ' + PORT)})




