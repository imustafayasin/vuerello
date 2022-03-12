const express = require('express');
var cors = require('cors')
var app = express()
var corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors())

app.get('/getUsers',function(req,res){
    res.json({"id":1,"success":true});
})

app.listen(3000)