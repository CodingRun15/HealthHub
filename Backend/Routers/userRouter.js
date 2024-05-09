const express = require('express');
const userRouter = express.Router();
const bcrypt = require('bcrypt');
const { userModel } = require('../Models/userModel');

userRouter.get('/', (req, res) => {
  res.send('This is homepage');
});
userRouter.post('/signup',async (req, res) => {
    try{
//  const user = userModel.findOne({ email: req.body.email });
//  if(user){
//     res.status(400).send('User already exists. Please login');
//  }
    bcrypt.hash(req.body.password,5,async(err,data)=>{
        console.log(req.body.password);
        if(err){
            res.status(500).send(err);
        }
        const newUser =  new userModel({
            ...req.body,password:data
        }) 
         try{ 
            newUser.save();
            console.log('userSaved');
         }
         catch(err){
            res.status(404).send(err);
         }
    })
      
    }
    catch(err){
        res.status(500).send(err);
    }
})

module.exports ={
    userRouter
}