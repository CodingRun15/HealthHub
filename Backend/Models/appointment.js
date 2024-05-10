const mongoose = require('mongoose');
const appointmentModel = mongoose.model('appointment',{
    userID:String,
    name:String,
    age:Number,
    department:String,
    doctor:String,
    date:String,
    time:String,
    file:String
})

module.exports = {appointmentModel};