const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    fileName: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: true
    },
    data: {
      type: Buffer, // Use Buffer data type to store file contents
      required: true
    }
  });
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
    Records:{
        type:[fileSchema],
        default:[]
    } 
});

module.exports = {userDataModel};