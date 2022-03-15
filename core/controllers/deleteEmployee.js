const model = require('../model/deleteEmployee.js');

exports.delete_employees = async function (req, res) {

    res.send(model.data(req));
}