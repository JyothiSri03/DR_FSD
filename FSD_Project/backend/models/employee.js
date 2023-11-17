import mongoose from 'mongoose';
const Schema = mongoose.Schema
const employee = new Schema({
    fname :{
        type:String,
        required:true
    },
    lname :{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true
    },
    sal :{
        type:String,
        required:true
    },
    date :{
        type:String,
        required:true
    }
})

export default mongoose.model('employees',employee)
