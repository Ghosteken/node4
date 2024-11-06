import express from 'express'
import mongoose from 'mongoose'
import router from './routes/user-routes'
import Blogrouter from './routes/blogs-routes'
const app = express()
app.use(express.json())

app.use('/api/user',router)
app.use('/api/blog',Blogrouter)

mongoose.connect('moausdjnhwuohjanqwuho')
.then(()=>{
    console.log('DB CONNECTED')
}).catch((err)=>{
    console.log(err)
})
// app.use('/',(req,res,next)=>{
//     res.send('this is working')
// })



app.listen(5000,(req,res)=>{
    console.log('server running')
})