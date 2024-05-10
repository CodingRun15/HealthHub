const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require("dotenv").config();
const {Server} = require('socket.io');
const http = require('http');
const { connection } = require('./configs/db');
const { userRouter } = require('./Routers/userRouter');
const { appointmentRouter } = require('./Routers/bookApp');
const app = express();
const server = http.createServer(app);
const io = new Server(server);
app.use(express.json());
app.use(cors());
app.use('/user',userRouter);
app.use('/user/appointments',appointmentRouter);
app.get('/', (req, res) => {
    res.send("I am live on render");
});

io.on('connection', (socket) => {
    console.log(`a user with id ${socket.id} connected`);  
    });

server.listen(process.env.PORT,async () => {
    console.log(`listening on port ${process.env.PORT}`);
    await connection;
    console.log('connected to atlas')

});

