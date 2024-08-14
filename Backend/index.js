const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require("dotenv").config();
const { connection } = require('./configs/db');
const { userRouter } = require('./Routers/userRouter');
const { appointmentRouter } = require('./Routers/bookApp');
const app = express();
app.use(express.json());
app.use(cors({origin: '*', 
  methods: ['GET', 'POST'],  
  allowedHeaders: ['Content-Type'], 
  credentials: true}));              
app.use('/user',userRouter);
app.use('/user/appointments',appointmentRouter);
app.get('/', (req, res) => {
   return res.send("I am live on render");
});


app.listen(process.env.PORT,async () => {
    console.log(`listening on port ${process.env.PORT}`);
    await connection;
    console.log('connected to atlas')
});

