import mongoose from 'mongoose';
const Schema = mongoose.Schema
const user = new Schema({
    username :{
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true
    },
})

export default mongoose.model('users ', user)



//when you want to run user.js the below code should run on app.js(backend)

// //User Form
// // //console.log("app running");
// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// //import student from './models/student';
// import user from './models/user';
// // //const express = require('express');
// const app = express();
// // //var bodyParser = require('body-parser)
// app.use(bodyParser.json())
// app.use(cors())
// app.use(express.json())//when we use postman we have to include this statement
// mongoose.connect('mongodb+srv://JyothiSri:VFkqGhXlhuXCBJAg@cluster0.76v7jxe.mongodb.net/?retryWrites=true&w=majority')
//     .then(()=>app.listen(3333))
//     .then(()=> 
//         console.log("connection successful")
//     )
//     .catch((err)=>console.log(err));
//     // // app.use('/api',(req,res,next)=>{
//     // // res.send("Drive Ready")
//     // // })
//     // //http://localhost:5000/postdata
//     app.post('/adduser',(req,res,next)=>
//     {
//         console.log(req.body.formdata) // //form data from the frontend
//        // res.send({"msg":"success"})// //perform action
//         const{username, password} = req.body.formdata
//         const usr = new user({
//             username,
//             password
//         })
//         usr.save()
//         return res.send({"result":usr})
//         // try{    //instead of top 2 lines we can also include this code
//         //     usr.save()
//         // }catch(err){
//         //     console.log(err)
//         // }
//         //return res.status(200).json({usr})
//     })
//     app.get('/getusers',async(req,res,next)=>{
//         let users;
//         try{
//             users = await user.find();
//         }catch(err){
//             console.log(err);
//         }
//         if(!users){
//             return res.status(404).json({message: "no users found."})
//         }
//         return res.status(200).json({users})
//     })   
// // //app.listen(1111)  //http://localhost:1111/api