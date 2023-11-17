import mongoose from 'mongoose';
const Schema = mongoose.Schema
const course = new Schema({
    id :{
        type:String,
        required:true
    },
    name :{
        type:String,
        required:true
    },
    fee :{
        type:String,
        required:true
    }
})

export default mongoose.model('courses', course)
