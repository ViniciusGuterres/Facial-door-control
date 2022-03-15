const { Client } = require('pg');

exports.data = function getAllEmployees() {

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

        const selectUsers = 
            `SELECT * FROM epidados`;

        const succesful = (data) => {
            db.end();

            result.data = data.rows;

            return result;
        };

        return db.query(selectUsers)
            .then(succesful)
            .catch(error)
    };

    return db.connect()
        .then(executeQuery)
        .catch(error)
}