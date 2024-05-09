const express = require('express');
const { auth } = require('../middlewares/auth');
const { appointmentModel } = require('../Models/appointment');
const appointmentRouter = express.Router();

appointmentRouter.get('/', (req, res) => {
  return res.send('Appontments page');
});
appointmentRouter.post('/bookapp',auth,async(req,res)=>{
try{
    const newApp = new appointmentModel(req.body);
    await newApp.save();
    // return res.redirect('/');
    return res.status(200).send("new appointment created");
}
catch(err){
    return res.status(400).send(err);
}
});
module.exports = {appointmentRouter};