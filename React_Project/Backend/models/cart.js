import mongoose from 'mongoose';
const Schema = mongoose.Schema
const cart = new Schema({
    title :{
        type:String,
        required:true
    },
    newPrice :{
        type:String,
        required:true
    },
    category :{
        type:String,
        required:true
    }
})

export default mongoose.model('carts ', cart)