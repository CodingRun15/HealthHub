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
      type: Buffer, 
      required: true
    }
  });
const appointmentModel = mongoose.model('appointment',{
    name:String,
    age:Number,
    department:String,
    doctor:String,
    date:Date||String,
    time:String,
    documents:{
        type:[fileSchema],
        default:[]
    }
},
{
    versionKey:false,
})

module.exports = {appointmentModel};