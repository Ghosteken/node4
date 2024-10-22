const express = require('express')

const app = express();
port = 8000

app.get('/back',(req,res)=>{
    res.send('we are togeter a gain')
})


app.listen(port,(req,res)=>{
    console.log("server up and running")
})