import mongoose, { Types } from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
        minLenght: 6
    },
    blogs:[{type:mongoose.Types.ObjectId,ref:'Blog',required:true}]

},{timestamps:true})

export default mongoose.model('User', userSchema);