// const model = require('../model/getAllAccess.js');

exports.get_access_history = async function (req, res) {
    console.log("🚀 ~ file: saveUserCrud.js ~ line 4 ~ req", req)
    const accessData = await model.data();
    const data = accessData.data || [];

    res.json(data);
}