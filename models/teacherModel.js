const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    teacherName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
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

module.exports = mongoose.model('teacher', teacherSchema);


/*
Data types
String
Number
Boolean
Date
Array
Object
*/
