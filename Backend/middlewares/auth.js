const jwt = require('jsonwebtoken');
const { userModel } = require('../Models/userModel');
require("dotenv").config({path:'./configs/.env'});
const auth = async (req, res, next) => {
    try{
        const token = req.headers["authorization"].split(" ")[1];
        jwt.verify(token,process.env.secret,async(err,decoded)=>{
            if(err){
                return res.status(401).json({
                    message:"Token is not valid"
                })
            }
            const {userID,email} = decoded;
            console.log(decoded);
            req.body.userID = userID;
            req.body.email = email;
            console.log(userID,email);
            const user = await userModel.findOne({_id:userID})
            req.id = user.userID;
             next();
        })
    }
    catch(err){
        return res.status(401).json({
            message:"Some error occurred while verifying"
        })
    }
}
module.exports ={auth};