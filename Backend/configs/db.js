const mongoose = require('mongoose');
require("dotenv").config({path:'./configs/.env'});
const connection = mongoose.connect(process.env.URI);
module.exports = {connection};