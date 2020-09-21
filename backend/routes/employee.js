const { Router } = require('express');
const router = Router();

const { getEmployees, createEmployee, deleteEmployee, updateEmployee } = require('../controllers/employeeController');

router.route('/')
    .get(getEmployees);

router.route('/create')
    .post(createEmployee);

router.route('/delete')
    .post(deleteEmployee)

router.route('/update')
    .post(updateEmployee)

module.exports = router;