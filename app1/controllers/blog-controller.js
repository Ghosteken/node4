import Blog from "../models/Blog";

export const getAllBlogs = async(res,req,next)=>{
    let blogs;
    try{
        blogs = await Blog.find()
    }catch(err){
        return console.log(err);
    }
    if(!blogs){
        return res.status(404).json({message:'No blogs found'})
    }else{
        return res.status(200).json({blogs,message:'Blogs found'})
    }
}

export const AddBlogs = async(res,req,next)=>{
    const {title,description,image,user} = req.body
    const blog =new blog({
        title,
        description,
        image,
        user,
    })
    try {
         blog = await Blog.save()
    } catch (error) {
        return console.log(error);
    } return res.status(200).json(blog,{message:'Blog saved'})
}

export const UpdateBlog = async(res,req,next)=>{
    const blogID = req.params.id
    try{
        const blog = await Blog.findByIdAndUpdate()
    }catch(error){
        return console.log(error)
    } return res.status(200).json(blog,{message:'Blog updated'})
}