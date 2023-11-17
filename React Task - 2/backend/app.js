import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import employee from './models/employee';
const app = express();
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://JyothiSri:VFkqGhXlhuXCBJAg@cluster0.76v7jxe.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>app.listen(1234))
    .then(()=> 
        console.log("connection successful")
    )
    .catch((err)=>console.log(err));

    app.post('/addemployee',(req,res,next)=>
    {
        console.log(req.body.formdata)
        const {fname, lname, email, sal, date} = req.body.formdata
        const emp = new employee({
            fname, 
            lname, 
            email, 
            sal, 
            date
        })
        try{
            emp.save()
        }
        catch(err){
            return console.log(err)
        }
        return res.status(200).json({"result":emp})
    })

    app.get('/getemployee',async(req,res,next)=>{
        let employeesdata;
        try{
            employeesdata = await employee.find();
        }catch(err){
            console.log(err);
        }
        if(!employeesdata){
            return res.status(404).json({message: "no employeesdata found."})
        }
        return res.status(200).json({employeesdata})
    })

    app.delete('/deleteemployee/:id',async(req,res,next)=>{
        let employeedata;
        const id= req.params.id
        try{
            employeedata = await employee.findByIdAndDelete({_id:id});
        }catch(err){
            console.log(err);
        }
        if(!employeedata){
            console.log("no employees found")
        }
        return res.status(200).json({employeedata})
    })


    //Edit form
    // app.get('/getcoursebyid/:id',async(req,res,next)=>{
    //     const _id = req.params.id
    //     let coursedata;
    //     try{
    //         coursedata = await course.findById(_id);
    //     }catch(err){
    //         console.log(err);
    //     }
    //     if(!coursedata){
    //         console.log("no courses found")// return res.status(404).json({message: "no coursedata found."})
    //     }
    //     return res.status(200).json({coursedata})
    // })

    // app.put('/updatecourse/:id',async(req,res,next)=>
    // {
    //     const _id = req.params.id
    //     const{id , name, fee} = req.body
    //     let emp;
    //     try{
    //         emp = await course.findByIdAndUpdate(_id,{id,name,fee}).then(response=>{console.log(response)}).catch(err=>{console.log(err)});
    //     }
    //     catch(err){
    //         console.log(err)
    //     }
    //     return res.send({msg:"updated","result":emp})
    // })


