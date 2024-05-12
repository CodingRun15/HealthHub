const express = require('express');
const nodemailer = require('nodemailer');
const { auth } = require('../middlewares/auth');
const { appointmentModel } = require('../Models/appointment');
const appointmentRouter = express.Router();
const { upload } = require('../middlewares/upload');
const mailer = require('nodemailer');
const transporter = mailer.createTransport({
  host: 'smtp.ethereal.email',
  port:587,
  auth:{
    user:'theo26@ethereal.email',
    pass:'X6u8nBQgn97vshnyCJ'
  }
}) 
appointmentRouter.post('/bookapp',auth,upload.single('file'),async(req,res)=>{
  try{
    const newAppData = {
      userID: req.id,
      name: req.body.name,
      age: req.body.age,
      department: req.body.department,
      doctor: req.body.doctor,
      date: req.body.date,
      time: req.body.time,
      file: req.file.path,
  };
    const newApp = new appointmentModel(newAppData);
    await newApp.save();
    const info = transporter.sendMail({
      from:' "HealthHub", theo26@ethereal.email',
      to: `${req.email}`,
      subject:'Appointment Booked',
      text:`Appointment has been booked for ${date} at ${time}.You can access the meeting link from your app`,
      html:'<h1>Appointment Booked</h1>'
    })
    return res.status(200).json("new appointment created");

}
catch(err){
    return res.status(400).send(err);
}
});
module.exports = {appointmentRouter};