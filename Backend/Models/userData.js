const mongoose = require('mongoose');
const userDataModel = mongoose.model('UserDataModel',{
    userID:String,
    name:String,
    email:String,
    phone:String,
    address:{
        street:String,
        city:String,
        state:String,
        pincode:String,
        country:String,
    },
    age:Number,
    height:Number,
    isAdmin:{type:Boolean, default:false},
});

module.exports = {userDataModel};