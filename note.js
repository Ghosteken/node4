import mongoose from 'mongoose';
import User from './app1/models/User';

export const getUser = async(req, res ,next) => {
    let user = req.query.user;
    try{
        user = await User.find()
    }catch(err){
        return console.log(err);
    } if (!user){
        return res.status(404).json({message:'User not found'});
    }else if (user){
        return res.status(200).json({message:'User successfully'});
    }
};

export const addUser = async(req, res,next) => {
    const {name, email, password} = req.body;
    let existingUser;
    try{
        existingUser = await User.findById(user)
    } catch(err){
        return console.log(err);
    }if(!existingUser) {
        
    }
}


































// const express = require('express')

// const app = express();
// port = 8000

// app.get('/back',(req,res)=>{
//     res.send('we are togeter a gain')
// })


// app.listen(port,(req,res)=>{
//     console.log("server up and running")
// })

const express = require('express');
const mongoose = require('mongoose')

const app = express()


mongoose.connect('/mogose:hkjanjajbadaouqwjn')
.then(()=>{
    console.log('connection sucess')
}).catch((err)=>{
    console.log('connection failed')
    console.log(err)
})

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    }
},{timstamp:true})

const UserModel = mongoose.model('userSchema',userSchema)




app.use(express.json())

app.get('/users',(req,res)=>{
    Users = req.body
    UserModel.find(Users)
    .try((Users)=>{
        res.send(Users)
        console.log('all users gotten')
    }).catch((err)=>{
        console.log(err)
        res.send({message:'err occured'})
    })

})

app.post('/users/:id',(req,res)=>{
    user = req.body
    UserModel.updateOne({_id:req.params.id,},user)
    .try(()=>{
        res.send({message:'user updated'})
        console.log("user updated")
    }).catch((err)=>{
        console.log(err)
        res.send('updated')
    })
})


app.listen(8050,(res,req)=>{
    res.send({message:'server has started'})
    console.log('server has started')
})



















