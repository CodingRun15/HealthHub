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
    isAdmin:{type:Boolean, default:false},
    Records:{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }
});

module.exports = {userDataModel};