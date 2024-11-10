import mongoose from "mongoose";
import Blog from "../models/Blog";
import User from "../models/User";

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
    let existingUser;
    try {
        existingUser = await User.findById(user)
    } catch (error) {
        return console.log(error);
    }
    if (!existingUser){
        return res.status(400).json({message:'unable to find user'})
    }
    const blog =new blog({
        title,
        description,
        image,
        user,
    })
    try {
        const session = mongoose.startSession()
        (await session).startTransaction()
         await Blog.save({session})
         existingUser.blogs.push(blog)
         await existingUser.save({session})
         (await session).commitTransaction()
    } catch (error) {
        return console.log(error);
        return res.status(500).json({message:err})
    } return res.status(200).json(blog,{message:'Blog saved'})
}

export const UpdateBlog = async(res,req,next)=>{
    const {title,description,image} = req.body
    const blogID = req.params.id
    let blog;
    try{
        blog = await Blog.findByIdAndUpdate(blogID,{
            title,
            description,
            image,
        });
    }catch(error){
        return console.log(error)
    } 
    if(!blog){
        return res.status(404).json({message:'Blog not found'})
    } else{
        return res.status(200).json(blog,{message:'Blog updated'})
    }
}

export const getById = async(res,req,next)=>{
    const id = req.params.id
    let blog;
    try {
        blog = await Blog.findById(id)
    } catch (error) {
        console.log(error)
    }if(!blog){
        return res.status(404).json({message:'Blog not found'})
    }return res.status(200).json({blog})
}

export const deleteBlog = async(res,req,next)=>{
    const id = req.params.id
    let blog;
    try{
        blog = await Blog.findOneAndDelete(id)
    } catch(err){
        console.log(err)
    }if(!blog){
        return res.status(404).json({message:'Unable to DELETE'})
    }return res.status(200).json({message:'Succesfully Deleted'})
}