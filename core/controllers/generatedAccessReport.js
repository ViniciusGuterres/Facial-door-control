const model = require('../model/getReportData.js');

exports.generatedAccessReport = async function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');

    const accessData = await model.data();
    const data = accessData.data || [];

    res.json(data);
}