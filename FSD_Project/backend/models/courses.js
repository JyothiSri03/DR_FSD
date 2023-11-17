import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const courseS = new Schema({
    name :{
        type:String,
        required:true
    },
    course :{
        type:String,
        required:true
    },
})

export default mongoose.model('courses ', courseS)



//when you want to run courses.js the below code should run on app.js(backend)

// //Courses Form
// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import courseS from './models/courses.js';
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
//         const{name , course} = req.body.formdata
//         const drc = new courseS({
//             name,
//             course,
//         })
//         drc.save()
//         return res.send({"Courses ":drc})
//     })
//     app.get('/getcourses',async(req,res,next)=>{
//         let courses;
//         try{
//             courses = await user.find();
//         }catch(err){
//             console.log(err);
//         }
//         if(!courses){
//             return res.status(404).json({message: "no courses found."})
//         }
//         return res.status(200).json({courses})
//     })  
// // //app.listen(1111)  //http://localhost:1111/api