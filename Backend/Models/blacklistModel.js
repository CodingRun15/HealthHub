const mongoose = require('mongoose');
const logoutModel = mongoose.model('blacklist',{
    token:String
});

module.exports = {
    logoutModel
}