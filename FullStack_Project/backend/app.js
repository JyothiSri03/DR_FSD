//console.log("app running");
import express from 'express';
import mongoose from 'mongoose'
//const express = require('express');
const app = express()
mongoose.connect('mongodb+srv://JyothiSri:VFkqGhXlhuXCBJAg@cluster0.76v7jxe.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>app.listen(2222))
    .then(()=> 
        console.log("connection successful")
    )
    .catch((err)=>console.log(err));
    // app.use('/api',(req,res,next)=>{
    // res.send("Drive Ready")
    // })

//app.listen(1111)  //http://localhost:1111/api