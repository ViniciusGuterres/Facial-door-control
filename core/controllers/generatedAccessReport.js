const model = require('../model/getReportData.js');

exports.generatedAccessReport = async function (req, res) {
    const accessData = await model.data();
    const data = accessData.data || [];

    

    res.json(data);
}