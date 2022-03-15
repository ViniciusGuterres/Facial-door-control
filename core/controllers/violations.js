const model = require('../model/getViolations');

exports.list_all_violations = async function (req, res) {
    const userData = await model.data();
    const data = userData.data || [];

    res.json(data);
}