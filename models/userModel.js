const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rollNo: {
        type: Number,
        required: true
    },
    time: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('user', userSchema);


/*
Data types
String
Number
Boolean
Date
Array
Object
*/
