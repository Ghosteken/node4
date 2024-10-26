const express = require("express");
const { Mongoose, default: mongoose } = require("mongoose");
const app = express()
PORT = 8000


app.get('/', (req, res) => {
    res.send("good boy")
});



//if you want to implement this accross all the end points
app.use(middleware);
// middleware to read request data in post and put and convert it to js object
app.use(express.json())

//database connection
//promise handling
mongoose.connect('mongodb://localhost:2017/mogo1')
.then(()=>{
    console.log('connection sucsessfull')
}).catch((err)=>{
    console.log(err)
})

const productschma = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is a must']
    },
    price:{
        type:Number,
        required:[true,'Price is a must'],
        min: 1
    },
    Quantity:{
        type:Number,
        required:[true,'!!!'],
    },
    category:{
        type:String,
        enum:['clothing','electronics','household']
    }
},{timestaps:true})

const productModel = mongoose.model('products',productschma)

// you can pass muliple vars
app.get('/users/:id/:name',(req,res)=>{
    console.log(req.params.id)
    res.send({message:'usres rq'})
});

app.get('/testing/:id',middleware,(req,res)=>{  
    console.log("main endpoint")
    res.send({message:'testing request'})
})

app.get('/products/:id',(req,res)=>{
    productModel.findOne({_id:req.params.id})
    .then((product)=>{
        res.send(product)
        
    }).catch((err)=>{
        console.log(err)
        res.send("problem")
    })
})


app.get('/products',(req,res)=>{
    productModel.find()
    .then((products)=>{
        res.send(products)
    }).catch((err)=>{
        console.log(err)
        res.send("problem")
    })
})

app.delete('/product/:id',(req,res)=>{
    productModel.deleteOne({_id:req.params.id})
    .then(()=>{
        res.send({message:'product deleted'})
        
    }).catch((err)=>{
        console.log(err)
        res.send("problem")
    })
})

app.put('/products/:id',(req,res)=>{
    product = req.body
    productModel.updateOne({_id:req.params.id},product)
    .then(()=>{
        res.send({message:'product updated'})
        console.log("product updated")
    }).catch((err)=>{
        console.log(err)
        res.send('updated')
    })
})

//former aproach
app.post('products',(req,res)=>{

    const product = req.body
    productModel.create(product)
    .then((document)=>{
        res.send({document,message:'product added'})
        console.log('product added')
    }).catch((err)=>{
        res.send({message:'operation failed'})
        console.log(err)
    })
    console.log(req.body)
    //under the hood
    // let product = '';
    // req.on('data',(chunk)=>{
    //     product +=chunk;
    // })

    // req.on('end',()=>{
    //     console.log(JSON.parse(product))
    // })

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