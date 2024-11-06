import mongoose from "mongoose";

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    discription:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true,
        minLenght: 6
    },
    user:{
        type: String,
        required: true
    },
},{timestamps:true})

export default mongoose.model('User', blogSchema);