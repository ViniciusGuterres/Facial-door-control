// requires
const { Client } = require('pg');
const db = require('../settings.js').db;

const {
    user,
    host,
    database,
    password,
    port
} = db;

exports.getUsers = (paramsObject) => {
    const { id } = paramsObject;

    const db = new Client({
        user,
        host,
        database,
        password,
        port
    });

    const result = {
        err: null,
        data: null
    };

    const error = (err) => {
        console.log('models/getUsers - error:', err);
        db.end();

        result.err = err;

        return result;
    };

    const executeQuery = () => {
        let getJustOneUserClause = '';

        if (id) {
            getJustOneUserClause = ` WHERE id = ${id}`;
        }

        const query = `
            SELECT 
                * 
            FROM 
                usuarios
            ${getJustOneUserClause}
        `;

        const succesful = (data) => {
            db.end();

            result.data = data.rows;
            return result;
        };

        return db.query(query)
        console.log("🚀 ~ file: getUsers.js ~ line 62 ~ executeQuery ~ query", query)
            .then(succesful)
            .catch(error)
    };

    return db.connect()
        .then(executeQuery)
        .catch(error)
}