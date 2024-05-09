const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const userModel = mongoose.model('User',new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
},
{
    versionKey:false
}));

module.exports ={userModel};