const mongoose = require('mongoose');
const Blacklist = mongoose.model('blacklist',{
    token:String
});

module.exports = {
    Blacklist
}