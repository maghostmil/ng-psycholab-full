var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var users = new Schema({
    user: String,
    pass: String,
    played: 
    {
        type: Number, 
        "default": 0
    },    
    points: 
    {
        type: Number, 
        "default": 0
    }
});

module.exports = mongoose.model('users', users);
