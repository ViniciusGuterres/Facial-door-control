// const model = require('../model/getAllAccess.js');

exports.get_access_history = async function (req, res) {
    const accessData = await model.data();
    const data = accessData.data || [];

    res.json(data);
}