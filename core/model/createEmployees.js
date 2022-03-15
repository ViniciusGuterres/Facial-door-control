const { Client } = require('pg');

exports.data = function createEmployees(req) {

    const db = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'covid_manager',
        password: 'admin',
        port: 5432
    });

    const result = {
        err: null,
        data: null
    };

    const error = (err) => {
        db.end();
        result.err = err;

        return result;
    };

    const executeQuery = () => {
        // variables req body for the query
        const registry = req.body.registry || '';
        const name = req.body.name || '';
        const birth_date = req.body.birthDate || '';
        const department = req.body.department || '';
        const riskGroup = req.body.riskGroup || false;
        const vaccine = req.body.vaccine || 'não tomou';
        const dose = req.body.dose || '';

        // console.log(
        //     'registry-' + registry,
        //     'name-' + name,
        //     'birthDate-' + birth_date,
        //     'department-' + department,
        //     'riskGroup-' + riskGroup,
        //     'vaccine' + vaccine,
        //     'dose-' + dose
        // );

        const insertUsers =
            `INSERT INTO users (matricula, nome, nascimento, setor, grupo_de_risco, vacina, dose, covid) 
             VALUES (${registry}, '${name}', '${birth_date}', '${department}', ${riskGroup}, '${vaccine}', '${dose}', false)`;

        const succesful = (data) => {
            db.end();
            result.data = req;

            return result;
        };

        return db.query(insertUsers)
            .then(succesful)
            .catch(error)
    };

    return db.connect()
        .then(executeQuery)
        .catch(error)
}