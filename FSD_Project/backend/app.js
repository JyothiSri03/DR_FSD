// //Form 1
// // // //console.log("app running");
// // import express from 'express';
// // import mongoose from 'mongoose';
// // import bodyParser from 'body-parser';
// // import cors from 'cors';
// // // //const express = require('express');
// // const app = express();
// // // //var bodyParser = require('body-parser)
// // app.use(bodyParser.json())
// // app.use(cors())
// // mongoose.connect('mongodb+srv://JyothiSri:VFkqGhXlhuXCBJAg@cluster0.76v7jxe.mongodb.net/?retryWrites=true&w=majority')
// //     .then(()=>app.listen(2222))
// //     .then(()=> 
// //         console.log("connection successful")
// //     )
// //     .catch((err)=>console.log(err));
// //     // // app.use('/api',(req,res,next)=>{
// //     // // res.send("Drive Ready")
// //     // // })
// //     // //http://localhost:5000/postdata
// //     app.post('/adddata',(req,res,next)=>
// //     {
// //         console.log(req.body.formdata) // //form data from the frontend
// //         res.send({"msg":"success"})// //perform action
// //     })
// // // //app.listen(1111)  //http://localhost:1111/api



// // //Form 2 -->student.js
// // // //console.log("app running");
// // import express from 'express';
// // import mongoose from 'mongoose';
// // import bodyParser from 'body-parser';
// // import cors from 'cors';
// // import student from './models/student';
// // // //const express = require('express');
// // const app = express();
// // // //var bodyParser = require('body-parser)
// // app.use(bodyParser.json())
// // app.use(cors())
// // app.use(express.json())//when we use postman we have to include this statement
// // mongoose.connect('mongodb+srv://JyothiSri:VFkqGhXlhuXCBJAg@cluster0.76v7jxe.mongodb.net/?retryWrites=true&w=majority')
// //     .then(()=>app.listen(2222))
// //     .then(()=> 
// //         console.log("connection successful")
// //     )
// //     .catch((err)=>console.log(err));
// //     // // app.use('/api',(req,res,next)=>{
// //     // // res.send("Drive Ready")
// //     // // })
// //     // //http://localhost:5000/postdata
// //     app.post('/addstudent',(req,res,next)=>
// //     {
// //         console.log(req.body.formdata) // //form data from the frontend
// //        // res.send({"msg":"success"})// //perform action
// //         const{name, rollno, college, branch} = req.body.formdata
// //         const stud = new student({
// //             name,
// //             rollno,
// //             college,
// //             branch
// //         })
// //         stud.save()
// //         return res.send({"result":stud})
// //     })
// //     app.get('/getstudents',async(req,res,next)=>{
// //         let students;
// //         try{
// //             students = await student.find();
// //         }catch(err){
// //             console.log(err);
// //         }
// //         if(!students){
// //             return res.status(404).json({message: "no students found."})
// //         }
// //         return res.status(200).json({students})
// //     })
// // // //app.listen(1111)  //http://localhost:1111/api




// //getdata -->student.js(delete and edit)
// // //console.log("app running");
// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import student from './models/student';
// const app = express();
// app.use(bodyParser.json())
// app.use(cors())
// app.use(express.json())

// mongoose.connect('mongodb+srv://JyothiSri:VFkqGhXlhuXCBJAg@cluster0.76v7jxe.mongodb.net/?retryWrites=true&w=majority')
//     .then(()=>app.listen(5555))
//     .then(()=> 
//         console.log("connection successful")
//     )
//     .catch((err)=>console.log(err));

//     app.post('/addstudent',(req,res,next)=>
//     {
//         console.log(req.body.formdata)
//         const{name, rollno, college, branch} = req.body.formdata
//         const stud = new student({
//             name,
//             rollno,
//             college,
//             branch
//         })
//         stud.save()
//         return res.send({"result":stud})
//     })

//     app.get('/getstudent',async(req,res,next)=>{
//         let studentsdata;
//         try{
//             studentsdata = await student.find();
//         }catch(err){
//             console.log(err);
//         }
//         if(!studentsdata){
//             return res.status(404).json({message: "no studentsdata found."})
//         }
//         return res.status(200).json({studentsdata})
//     })

//     app.delete('/deleteuser/:id',async(req,res,next)=>{
//         let studentdata;
//         const id= req.params.id
//         try{
//             studentdata = await student.findByIdAndDelete({_id:id});
//         }catch(err){
//             console.log(err);
//         }
//         if(!studentdata){
//             console.log("no students found")
//         }
//         return res.status(200).json({studentdata})
//     })



//Form 1
// // //console.log("app running");
// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// // //const express = require('express');
// const app = express();
// // //var bodyParser = require('body-parser)
// app.use(bodyParser.json())
// app.use(cors())
// mongoose.connect('mongodb+srv://JyothiSri:VFkqGhXlhuXCBJAg@cluster0.76v7jxe.mongodb.net/?retryWrites=true&w=majority')
//     .then(()=>app.listen(2222))
//     .then(()=> 
//         console.log("connection successful")
//     )
//     .catch((err)=>console.log(err));
//     // // app.use('/api',(req,res,next)=>{
//     // // res.send("Drive Ready")
//     // // })
//     // //http://localhost:5000/postdata
//     app.post('/adddata',(req,res,next)=>
//     {
//         console.log(req.body.formdata) // //form data from the frontend
//         res.send({"msg":"success"})// //perform action
//     })
// // //app.listen(1111)  //http://localhost:1111/api



// //Form 2 -->student.js
// // //console.log("app running");
// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import student from './models/student';
// // //const express = require('express');
// const app = express();
// // //var bodyParser = require('body-parser)
// app.use(bodyParser.json())
// app.use(cors())
// app.use(express.json())//when we use postman we have to include this statement
// mongoose.connect('mongodb+srv://JyothiSri:VFkqGhXlhuXCBJAg@cluster0.76v7jxe.mongodb.net/?retryWrites=true&w=majority')
//     .then(()=>app.listen(2222))
//     .then(()=> 
//         console.log("connection successful")
//     )
//     .catch((err)=>console.log(err));
//     // // app.use('/api',(req,res,next)=>{
//     // // res.send("Drive Ready")
//     // // })
//     // //http://localhost:5000/postdata
//     app.post('/addstudent',(req,res,next)=>
//     {
//         console.log(req.body.formdata) // //form data from the frontend
//        // res.send({"msg":"success"})// //perform action
//         const{name, rollno, college, branch} = req.body.formdata
//         const stud = new student({
//             name,
//             rollno,
//             college,
//             branch
//         })
//         stud.save()
//         return res.send({"result":stud})
//     })
//     app.get('/getstudents',async(req,res,next)=>{
//         let students;
//         try{
//             students = await student.find();
//         }catch(err){
//             console.log(err);
//         }
//         if(!students){
//             return res.status(404).json({message: "no students found."})
//         }
//         return res.status(200).json({students})
//     })
// // //app.listen(1111)  //http://localhost:1111/api




// //getdata -->student.js(delete and edit)
// // //console.log("app running");
// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import student from './models/student';
// const app = express();
// app.use(bodyParser.json())
// app.use(cors())
// app.use(express.json())

// mongoose.connect('mongodb+srv://JyothiSri:VFkqGhXlhuXCBJAg@cluster0.76v7jxe.mongodb.net/?retryWrites=true&w=majority')
//     .then(()=>app.listen(5555))
//     .then(()=> 
//         console.log("connection successful")
//     )
//     .catch((err)=>console.log(err));

//     app.post('/addstudent',(req,res,next)=>
//     {
//         console.log(req.body.formdata)
//         const{name, rollno, college, branch} = req.body.formdata
//         const stud = new student({
//             name,
//             rollno,
//             college,
//             branch
//         })
//         stud.save()
//         return res.send({"result":stud})
//     })

//     app.get('/getstudent',async(req,res,next)=>{
//         let studentsdata;
//         try{
//             studentsdata = await student.find();
//         }catch(err){
//             console.log(err);
//         }
//         if(!studentsdata){
//             return res.status(404).json({message: "no studentsdata found."})
//         }
//         return res.status(200).json({studentsdata})
//     })

//     app.delete('/deleteuser/:id',async(req,res,next)=>{
//         let studentdata;
//         const id= req.params.id
//         try{
//             studentdata = await student.findByIdAndDelete({_id:id});
//         }catch(err){
//             console.log(err);
//         }
//         if(!studentdata){
//             console.log("no students found")
//         }
//         return res.status(200).json({studentdata})
//     })


//     //Edit form
//     app.get('/getstudentbyid/:id',async(req,res,next)=>{
//         const _id = req.params.id
//         let studentdata;
//         try{
//             studentdata = await student.findById(_id);
//         }catch(err){
//             console.log(err);
//         }
//         if(!studentdata){
//             console.log("no students found")// return res.status(404).json({message: "no studentdata found."})
//         }
//         return res.status(200).json({studentdata})
//     })

//     app.put('/updatestudent/:id',async(req,res,next)=>
//     {
//         const _id = req.params.id
//         const{name, rollno, college, branch} = req.body
//         let stud;
//         try{
//             stud = await student.findByIdAndUpdate(_id,{name,rollno,college,branch}).then(response=>{console.log(response)}).catch(err=>{console.log(err)});
//         }
//         catch(err){
//             console.log(err)
//         }
//         return res.send({msg:"updated","result":stud})
//     })



// //coursedata
// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import course from './models/course';
// const app = express();
// app.use(bodyParser.json())
// app.use(cors())
// app.use(express.json())

// mongoose.connect('mongodb+srv://JyothiSri:VFkqGhXlhuXCBJAg@cluster0.76v7jxe.mongodb.net/?retryWrites=true&w=majority')
//     .then(()=>app.listen(4444))
//     .then(()=> 
//         console.log("connection successful")
//     )
//     .catch((err)=>console.log(err));

//     app.post('/addcourse',(req,res,next)=>
//     {
//         console.log(req.body.formdata)
//         const {id, name, fee} = req.body.formdata
//         const crse = new course({
//             id,
//             name,
//             fee
//         })
//         try{
//             crse.save()
//         }
//         catch(err){
//             return console.log(err)
//         }
//         return res.status(200).json({"result":crse})
//     })

//     app.get('/getcourse',async(req,res,next)=>{
//         let coursesdata;
//         try{
//             coursesdata = await course.find();
//         }catch(err){
//             console.log(err);
//         }
//         if(!coursesdata){
//             return res.status(404).json({message: "no coursesdata found."})
//         }
//         return res.status(200).json({coursesdata})
//     })

//     app.delete('/deletecourse/:id',async(req,res,next)=>{
//         let coursedata;
//         const id= req.params.id
//         try{
//             coursedata = await course.findByIdAndDelete({_id:id});
//         }catch(err){
//             console.log(err);
//         }
//         if(!coursedata){
//             console.log("no courses found")
//         }
//         return res.status(200).json({coursedata})
//     })


//     //Edit form
//     app.get('/getcoursebyid/:id',async(req,res,next)=>{
//         const _id = req.params.id
//         let coursedata;
//         try{
//             coursedata = await course.findById(_id);
//         }catch(err){
//             console.log(err);
//         }
//         if(!coursedata){
//             console.log("no courses found")// return res.status(404).json({message: "no coursedata found."})
//         }
//         return res.status(200).json({coursedata})
//     })

//     app.put('/updatecourse/:id',async(req,res,next)=>
//     {
//         const _id = req.params.id
//         const{id , name, fee} = req.body
//         let crse;
//         try{
//             crse = await course.findByIdAndUpdate(_id,{id,name,fee}).then(response=>{console.log(response)}).catch(err=>{console.log(err)});
//         }
//         catch(err){
//             console.log(err)
//         }
//         return res.send({msg:"updated","result":crse})
//     })



//employee form
// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import employee from './models/employee';
// const app = express();
// app.use(bodyParser.json())
// app.use(cors())
// app.use(express.json())

// mongoose.connect('mongodb+srv://JyothiSri:VFkqGhXlhuXCBJAg@cluster0.76v7jxe.mongodb.net/?retryWrites=true&w=majority')
//     .then(()=>app.listen(1234))
//     .then(()=> 
//         console.log("connection successful")
//     )
//     .catch((err)=>console.log(err));

//     app.post('/addemployee',(req,res,next)=>
//     {
//         console.log(req.body.formdata)
//         const {fname, lname, email, sal, date} = req.body.formdata
//         const emp = new employee({
//             id,
//             name,
//             fee
//         })
//         try{
//             emp.save()
//         }
//         catch(err){
//             return console.log(err)
//         }
//         return res.status(200).json({"result":emp})
//     })

//     app.get('/getemployee',async(req,res,next)=>{
//         let employeesdata;
//         try{
//             employeesdata = await employee.find();
//         }catch(err){
//             console.log(err);
//         }
//         if(!employeesdata){
//             return res.status(404).json({message: "no employeesdata found."})
//         }
//         return res.status(200).json({employeesdata})
//     })

//     app.delete('/deleteemployee/:id',async(req,res,next)=>{
//         let employeedata;
//         const id= req.params.id
//         try{
//             employeedata = await employee.findByIdAndDelete({_id:id});
//         }catch(err){
//             console.log(err);
//         }
//         if(!employeedata){
//             console.log("no employees found")
//         }
//         return res.status(200).json({employeedata})
//     })


//     Edit form
//     app.get('/getcoursebyid/:id',async(req,res,next)=>{
//         const _id = req.params.id
//         let coursedata;
//         try{
//             coursedata = await course.findById(_id);
//         }catch(err){
//             console.log(err);
//         }
//         if(!coursedata){
//             console.log("no courses found")// return res.status(404).json({message: "no coursedata found."})
//         }
//         return res.status(200).json({coursedata})
//     })

//     app.put('/updatecourse/:id',async(req,res,next)=>
//     {
//         const _id = req.params.id
//         const{id , name, fee} = req.body
//         let emp;
//         try{
//             emp = await course.findByIdAndUpdate(_id,{id,name,fee}).then(response=>{console.log(response)}).catch(err=>{console.log(err)});
//         }
//         catch(err){
//             console.log(err)
//         }
//         return res.send({msg:"updated","result":emp})
//     })




//emailform
// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import nodemailer from 'nodemailer'
// import email from './models/email';
// const app = express();
// app.use(bodyParser.json())
// app.use(cors())
// app.use(express.json())

// mongoose.connect('mongodb+srv://JyothiSri:VFkqGhXlhuXCBJAg@cluster0.76v7jxe.mongodb.net/?retryWrites=true&w=majority')
//     .then(()=>app.listen(9999))
//     .then(()=> 
//         console.log("connection successful")
//     )
//     .catch((err)=>console.log(err));

//     app.post('/adduser',(req,res,next)=>
//     {
//         console.log(req.body.formdata)
//         const {uname , mail , pass} = req.body.formdata
//         const em = new email({
//             uname,
//             mail,
//             pass
//         })
//         try{
//             em.save()
//             var transporter = nodemailer.createTransport({
//                 service: 'gmail',
//                 auth: {
//                   user: 'gdsjyothisri@gmail.com',
//                   pass: 'woea krcx iwgr zfjq'
//                 }
//               });
              
//               var mailOptions = {
//                 from: 'gdsjyothisri@gmail.com',
//                 to: mail,
//                 subject: 'Course Registration',
//                 text: 'Thanks for Registration'
//               };
              
//               transporter.sendMail(mailOptions, function(error, info){
//                 if (error) {
//                   console.log(error);
//                 } else {
//                   console.log('Email sent: ' + info.response);
//                 }
//               });
//         }
//         catch(err){
//             return console.log(err)
//         }
//         return res.status(200).json({"result":em})
//     })




//emailform file upload
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import nodemailer from 'nodemailer'
import email from './models/email';
import multer from 'multer';
const app = express();
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://JyothiSri:VFkqGhXlhuXCBJAg@cluster0.76v7jxe.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>app.listen(9999))
    .then(()=> 
        console.log("connection successful")
    )
    .catch((err)=>console.log(err));



    const storage = multer.diskStorage({
      destination: function (req, file, callback) {
        callback(null, 'public/images')
      },
      filename: function (req, file, callback) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        callback(null, Date.now()+"_"+file.originalname)
      }
    })
    
    const upload = multer({ storage: storage })



    app.post('/adduser',upload.single('myfile'),async(req,res,next)=>
    {
        console.log(req.file)
        const profile = (req.file) ? req.file.filename : null
        const {uname , mail , pass } = req.body
        const em = new email({
            uname,
            mail,
            pass,
            profile
        })
        try{
            em.save()
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'gdsjyothisri@gmail.com',
                  pass: 'woea krcx iwgr zfjq'
                }
              });
              
              var mailOptions = {
                from: 'gdsjyothisri@gmail.com',
                to: mail,
                subject: 'Course Registration',
                text: profile
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
        }
        catch(err){
            return console.log(err)
        }
        return res.status(200).json({"result":em})
    })



    