const mongoose = require('mongoose');
const appointmentModel = mongoose.model('appointment',{
    userID:String,
    name:{type:String,required:true},
    age:{type:Number,required:true},
    department:{type:String,required:true}, 
    doctor:String,
    date:Date,
    time:String,
    file:String
})
module.exports = {appointmentModel};