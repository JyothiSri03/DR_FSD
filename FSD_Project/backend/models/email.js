// //email sent
// import mongoose from 'mongoose';
// const Schema = mongoose.Schema
// const email = new Schema({
//     uname :{
//         type:String,
//         required:true
//     },
//     mail :{
//         type:String,
//         required:true
//     },
//     pass :{
//         type:String,
//         required:true
//     },
// })

// export default mongoose.model('emails ', email)

//file upload
import mongoose from 'mongoose';
const Schema = mongoose.Schema
const email = new Schema({
    uname :{
        type:String,
        required:true
    },
    mail :{
        type:String,
        required:true
    },
    pass :{
        type:String,
        required:true
    },
    profile :{
        type:String,
        required:true
},
})

export default mongoose.model('emails ', email)