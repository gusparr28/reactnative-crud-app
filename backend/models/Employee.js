const {Schema, model} = require('mongoose');

const employeeSchema = new Schema({
    name: String,
    description: String,
    email: String,
    phone: String,
    salary: String,
    picture: String,
});

module.exports = model('Employee', employeeSchema);