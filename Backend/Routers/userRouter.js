const express = require('express');
const userRouter = express.Router();
const bcrypt = require('bcrypt');
const { userModel } = require('../Models/userModel');
const jwt = require('jsonwebtoken');
const { auth } = require('../middlewares/auth');
const { userDataModel } = require('../Models/userData');

userRouter.get('/', (req, res) => {
  res.send('This is homepage');
});
userRouter.post('/signup',async (req, res) => {
    try{
 const user = userModel.findOne({ email: req.body.email });
 if(user){
    return res.status(400).send('User already exists. Please login');
 }
    bcrypt.hash(req.body.password,5,async(err,data)=>{
        console.log(req.body.password);
        if(err){
            return res.status(500).send(err);
        }
        const newUser =  new userModel({
            ...req.body,password:data
        }) 
        console.log(newUser);
         try{ 
           await  newUser.save();
            console.log('userSaved');
            return res.status(200).send('new User added');
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

userRouter.post('/signin', async(req, res) => {
    const {email,password} = req.body;
try{
    const user = await userModel.findOne({email:email});
    if(!user){
        return res.status(404).send('Email not registered.Please register first');
    }
    bcrypt.compare(password,user.password,(err,result)=>{
      if(err){
       res.status(401).send('some error occurred. Please try again');   
    } 
      if(result){
      const token = jwt.sign({userID:user._id,email:user.email},process.env.secret,({expiresIn:"1h"}))
      return res.status(200).json({"login successful":token});
     }
     else{
        return res.status(401).send('Invalid password');
     }
  })
  }
  catch(err){
   return res.status(500).send(err);
  }
  })

  userRouter.get('/dashboard',auth,async (req,res)=>{
      try{
          const user = await UserDataModel.findOne({userID:req.userID});
          if(user){
          return res.status(200).send(user);
          }
          else{
              return res.status(404).send('Please login again');
          }
      }
      catch(err){
         return res.status(500).send(err);
      }
  })
  userRouter.post('/dashboard',auth,async(req,res)=>{
    try{
        const userData = new userDataModel(req.body);
        await userData.save();
        return res.status(200).send('Data Updated successfully');
    }
    catch(err){
       return res.status(500).send(err);
    }
    // finally{
    //    return res.redirect('/dashboard');
    // }

  })

module.exports ={
    userRouter
}