import express from 'express'
const Blogrouter = express.Router()

Blogrouter.get('/',getAllBlogs);
Blogrouter.post('/add',AddBlogs);
Blogrouter.put('/update/:id',UpdateBlog);
Blogrouter.get('/:id',getById);
Blogrouter.delete('/:id',deleteBlog);
Blogrouter.get('/user/:id',getByUserId);





export default Blogrouter;