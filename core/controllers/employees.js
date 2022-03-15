const model = require('../model/createEmployees.js');

exports.create_employees = async function (req, res) {

    res.send(model.data(req));
}