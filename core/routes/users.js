'use strict';
const users = require('../controllers/users');
const employees = require('../controllers/employees');
const deleteEmployees = require('../controllers/deleteEmployee');
const violations = require('../controllers/violations') ;

module.exports = function(app) {

    app.route('/users/list')
        .get(users.list_all_users)

    app.route('/removeEmployee/:id')
        .delete(deleteEmployees.delete_employees)

    app.route('/employeeRegistration')
        .post(employees.create_employees)

    app.route('/historyViolations')
        .get(violations.list_all_violations)
}