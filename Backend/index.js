const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require("dotenv").config();
const {Server} = require('socket.io');
const http = require('http');
const { run, connection } = require('./configs/db');
const { userRouter } = require('./Routers/userRouter');
const app = express();
// app.use(bodyParser);
const server = http.createServer(app);
const io = new Server(server);
app.use(express.json());
app.use(cors());
app.use('/user',userRouter);
app.get('/', (req, res) => {
    res.send('This is a test');
});

io.on('connection', (socket) => {
    console.log(`a user with id ${socket.id} connected`);  
    });

server.listen(process.env.PORT,async () => {
    console.log(`listening on port ${process.env.PORT}`);
    await connection;
    console.log('connected to atlas')

});

