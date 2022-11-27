const model = require('../model/getAllAccess.js');

exports.getAccessHistory = async function (req, res) {
    const accessData = await model.data();
    const data = accessData.data || [];

    res.json(data);
}