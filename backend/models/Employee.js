const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    fName: {
        type: String,
        maximum: 30,
        required: true
    },
    lName: {
        type: String,
        maximum: 30,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        required: true
    }
}) 

const Employee = mongoose.model('Employee', employeeSchema)

module.exports = Employee