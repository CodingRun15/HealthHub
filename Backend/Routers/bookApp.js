const express = require('express');
const { auth } = require('../middlewares/auth');
const { appointmentModel } = require('../Models/appointment');
const appointmentRouter = express.Router();
const { upload } = require('../middlewares/upload');
appointmentRouter.get('/', (req, res) => {
  return res.json('Appontments page');
});
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
    // console.log(JSON.stringify(newAppData));
    const newApp = new appointmentModel(newAppData);
    // console.log(newApp);
    await newApp.save();
    // return res.redirect('/');
    return res.status(200).json("new appointment created");
}
catch(err){
    return res.status(400).send(err);
}
});
module.exports = {appointmentRouter};