const mongoose = require('mongoose');
const validator = require('validator');

const User = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 5,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: "{VALUE} is not a valid email address!"
        }
    },
    password: {
        type: String,
        required: true,
        trim: true        
    },
    username: {
        type: String,
        required: true,
        minlength: 8,
        trim: true,
        unique: true
    }
});

module.exports = mongoose.model('User', User);
//exports model and schema