import mongoose from 'mongoose';
const Schema = mongoose.Schema
const user = new Schema({
    username :{
        type:String,
        required:true
    },
    address :{
        type:String,
        required:true
    },
    phno :{
        type:String,
        required:true
    },
    pay :{
        type:String,
        required:true
    },
})

export default mongoose.model('users ', user)
