const mongoose = require('mongoose');
const userModel = mongoose.model('User',{
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    phone:{type:String,required:true},
    address:{
        street:{type:String,required:true},
        city:{type:String,required:true},
        state:{type:String,required:true},
        country:{type:String,required:true},
        pincode:{type:String,required:true}
    },
    age:Number,
    gender:String,
});

module.exports ={userModel};