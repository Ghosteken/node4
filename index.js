const express = require("express")
const app = express()
PORT = 8000


app.get('/', (req, res) => {
    res.send("good boy")
});

//if you want to implement this accross all the end points
app.use(middleware);

// you can pass muliple vars
app.get('/users/:id/:name',(req,res)=>{
    console.log(req.params.id)
    res.send({message:'usres rq'})
});

app.get('/testing/:id',middleware,(req,res)=>{
    console.log("main endpoint")
    res.send({message:'testing request'})
})

function middleware(req,res,next){
    if(req.params.id> 10)  {
        res.send({message:'you are blocked'})
    } else{
        next()
    }
} 



app.listen(PORT,()=>{
    console.log('server up and running on port',PORT);
})