import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import Cart from './models/cart';
import user from './models/checkout';
import comment from './models/comment'
const app = express();
app.use(bodyParser.json())
app.use(cors())
mongoose.connect('mongodb+srv://JyothiSri:VFkqGhXlhuXCBJAg@cluster0.76v7jxe.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>app.listen(1404))
    .then(()=> 
        console.log("connection successful")
    )
    .catch((err)=>console.log(err));

    app.post('/addcart',(req,res,next)=>
    {
        console.log(req.body)
        const { title, newPrice, category} = req.body
        const c = new Cart({
            title,
            newPrice,
            category
        })
        c.save()
        return res.status(200).json(c)
    })

    app.get('/allcarts',async(req,res,next)=>{
        let carts;
        try{
            carts = await Cart.find();
        }catch(err){
            console.log(err);
        }
        if(!carts){
            return res.status(404).json({message: "no items found."})
        }
        return res.status(200).json(carts)
    })
    
    app.delete('/deletecart/:id',async(req,res,next)=>{
    let cartdata;
    const id= req.params.id
    try{
        cartdata = await Cart.findByIdAndDelete({_id:id});
    }
    catch(err)
    {
        console.log(err);
    }
    if(!cartdata){
        console.log("no students found")
    }
        return res.status(200).json({cartdata})
    })

    app.post('/adduser',(req,res,next)=>
    {
        console.log(req.body.formdata)
        const{username, address, phno, pay} = req.body.formdata
        const usr = new user({
            username,
            address,
            phno,
            pay
        })
        usr.save()
        return res.send({"result":usr})
    })
    app.get('/getusers',async(req,res,next)=>{
        let users;
        try{
            users = await user.find();
        }catch(err){
            console.log(err);
        }
        if(!users){
            return res.status(404).json({message: "no users found."})
        }
        return res.status(200).json({users})
    })  


    app.post('/addmsg',(req,res,next)=>
    {
        console.log(req.body.formdata)
        const{name, mail, cmnt} = req.body.formdata
        const msg = new comment({
            name,
            mail,
            cmnt
        })
        msg.save()
        return res.send({"result":msg})
    })
    app.get('/getmsgs',async(req,res,next)=>{
        let msgs;
        try{
            msgs = await msg.find();
        }catch(err){
            console.log(err);
        }
        if(!msgs){
            return res.status(404).json({message: "no msgs found."})
        }
        return res.status(200).json({msgs})
    })

//     //products

// const storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//       callback(null, 'public/images')
//     },
//     filename: function (req, file, callback) {
//       // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       callback(null, Date.now()+"_"+file.originalname)
//     }
//   })
  
//   const upload = multer({ storage: storage })
//   //add product 
//   app.post("/addproduct",upload.single("myfile"),async(req, res, next)=>{
//     const productpic=(req.file)? req.file.filename:null
//     //console.log(req.body.formdata)
//     const {title,price,category} =req.body
//     const prod = new product({
//         title,
//         price,
//         category,
//         productpic,
//       })
//     try{
//         prod.save()//for saving the data into the database
//         return res.status(200).json({ message: 'Product added to cart successfully' });
//     }catch(err){
//            return res.status(400).json({message:"not uploaded"})
//     }      
// })

// app.get('/getallproduts',async(req,res,next)=>{
//     let productsdata; 
//     try{
//         productsdata=await product.find();
//     }catch(err){
//         console.log(err);
//     }
//     if(!productsdata){

//         return res.status(404).json({message:"no student found."})

//     }
//     return res.status(200).json(productsdata)
// })