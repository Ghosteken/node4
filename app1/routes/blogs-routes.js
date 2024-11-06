import express from 'express'
const Blogrouter = express.Router()

Blogrouter.get('/',getAllBlogs);
Blogrouter.post('/add',AddBlogs);
Blogrouter.put('/update/:id',UpdateBlog);




export default Blogrouter;