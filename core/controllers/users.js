const model = require('../model/getEmployees');

exports.list_all_users = async function (req, res) {
    const userData = await model.data();
    const data = userData.data || [];

    const usersInfoObj = {
        usersInfo: {
            covidCasesAmount: 0,
            registredEmployeesAmount: 0,
            riskGroupEmployeesAmount: 0
        },
        barChart: {

        },
        donutChart: {

        },
        lineChart: {

        },
        usersList: data
    }

    // Filtering datas
    data.map((item, index) => {
        // Couting how many employees are registred
        usersInfoObj.usersInfo.registredEmployeesAmount = index + 1;

        // Couting how many have employees have covid
        if (item.covid) {
            usersInfoObj.usersInfo.covidCasesAmount++;
        }

        // Couting how many are risk group
        if (item.grupo_de_risco) {
            usersInfoObj.usersInfo.riskGroupEmployeesAmount++;
        }
    });

    res.json(usersInfoObj);
}