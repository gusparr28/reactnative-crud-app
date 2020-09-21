const employeeController = {};

const Employee = require('../models/Employee');

employeeController.createEmployee = (req, res) => {
    const { name, description, email, phone, salary, picture } = req.body;
    const employee = new Employee({
        name,
        description,
        email,
        phone,
        salary,
        picture
    });
    employee.save().then(data => {
        console.log(data);
        res.send('Employee successfully created');
    }).catch(err => console.error(err));
};

employeeController.getEmployees = (req, res) => {
    Employee.find({}).then(data => res.send(data))
        .catch(err => console.error(err));
};

employeeController.updateEmployee = (req, res) => {
    const { id, name, description, email, phone, salary, picture } = req.body;
    Employee.findByIdAndUpdate(id, {
        name,
        description,
        email,
        phone,
        salary,
        picture
    }).then(data => {
        console.log(data);
        res.send('Employee successfully updated');
    }).catch(err => console.error(err));
};

employeeController.deleteEmployee = (req, res) => {
    const { id } = req.body;
    Employee.findByIdAndRemove(id).then(data => {
        console.log(data);
        res.send('Employee successfully deleted');
    }).catch(err => console.error(err));
};

module.exports = employeeController;