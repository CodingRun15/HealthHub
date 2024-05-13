const express = require('express');
const userRouter = express.Router();
const bcrypt = require('bcryptjs');
const { userModel } = require('../Models/userModel');
const jwt = require('jsonwebtoken');
const { auth } = require('../middlewares/auth');
const { userDataModel } = require('../Models/userData');
const {Blacklist } = require('../Models/blacklistModel');

userRouter.get('/', (req, res) => {
  res.send('This is homepage');
});
userRouter.post('/signup',async (req, res) => {
   const  {password} = req.body;
   console.log(password);
    try{
 const user = await userModel.findOne({ email: req.body.email});
//  console.log(req.body);
 if(user){
    console.log('user not found')
   return res.status(400).send('User already exists. Please login');
 }
   bcrypt.genSalt(5, (err, salt) => {
    bcrypt.hash(password,salt,async (err,data)=>{
        console.log(data);
        if(err){
            return res.status(500).json({err:err});
        }
        console.log(data);
        const newUser =  new userModel({
            ...req.body,password:data
        }) 
        console.log(newUser);
         try{ 
           await newUser.save();
            console.log('userSaved');
            return res.status(200).send('new User added');
         }
         catch(err){
           return res.status(404).send(err);
         }
    })
})  
    }
    catch(err){
        res.status(500).json({"message":err});
    }
})

userRouter.post('/signin', async(req, res) => {
    const {email,password} = req.body;
    console.log(email,password);
try{
    const user = await userModel.findOne({email:email});
    console.log(user);
    if(!user){
        return res.status(404).send('Email not registered.Please register first');
    }
    bcrypt.compare(password,user.password,(err,result)=>{
      if(err){
       res.status(401).send('some error occurred. Please try again');   
    } 
      if(result){
      const token = jwt.sign({userID:user._id,email:user.email},process.env.secret,({expiresIn:"5h"}))
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
  userRouter.post('/signout', async(req,res)=>{
    try{
        const accessToken = req.headers["authorization"].split(" ")[1];
        if(!accessToken){
            return res.status(401).json({
                message:"You're not logged in.Please Login"
            })
        }
          const loggedOut = await Blacklist.findOne({token:accessToken});
          if(loggedOut){
            return res.status(401).json({
                message:"Session expired.Please Login again"
            })
          }
          const blacklist = new Blacklist({token:accessToken});
          await blacklist.save(); 
          return res.status(200).json({
              message:"You have successfully logged out"
          })     
    }
    catch(err){
     return res.status(500).send(err);
    }
})
userRouter.get('/profile', auth, async (req, res) => {
    console.log(req.id);
    try {
        const user = await userDataModel.findOne({ userID: req.id });
        if (user) {
            return res.status(200).send(user);
        } else {
            return res.status(404).send('User profile not found');
        }
    } catch (err) {
        return res.status(500).send(err);
    }
  });
//   userRouter.get('/dashboard',auth,async (req,res)=>{
//       try{
//           const user = await userDataModel.findOne({userID:req.userID});
//           if(user){
//           return res.status(200).send(user);
//           }
//           else{
//               return res.status(404).send('Please login again');
//           }
//       }
//       catch(err){
//          return res.status(500).send(err);
//       }
//   })
  userRouter.post('/dashboard',auth,async(req,res)=>{
    try{
        const userData = new userDataModel(req.body);
        await userData.save();
        return res.status(200).send('Data Updated successfully');
    }
    catch(err){
       return res.status(500).send(err);
    }

  })
  userRouter.patch('/dashboard', async (req,res)=>{
    try{
        const user = await userDataModel.findOne({userID:req.userID});
        if(user){
           
            await user.save();
            return res.status(200).send('Data Updated successfully');
        }
        else{
            return res.status(404).send('Please login again');
        }
    }
    catch(err){
       return res.status(500).send(err);
    }
  })

module.exports ={
    userRouter
}
