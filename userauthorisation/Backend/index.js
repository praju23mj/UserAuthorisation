const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors")
const FormModel=require('../models/Form')

const app = express();
app.use(express.json())//this will helps to transfer the data from FE to BE in json format
// app.use(cors())

mongoose.connect("mongodb://localhost:27017/Form").then(()=>{
    console.log("DBConnected")


    app.post("/login",(req,res)=>{
        const{email,password}=req.body;
        FormModel.findOne({email: email})// it will find if the data is exist the record 
        .then(user=>{
            if(user){  // if user is exist then this is the conditon
                if(user.password===password){
                    res.json("Success")
                }else{
                    res.json("Password is incorrect bitch")
                }
            }else{
                res.json("Please Register to login")
            }
        })
    })



    app.post('/register',(req,res)=>{
        FormModel.create(req.body)
        .then(form=>res.json(form))
        .catch(err=>res.json(err))
    })
    app.listen(3000,()=>{
        console.log("listening")
    })
}).catch((error)=>{
    console.log(error)
})

