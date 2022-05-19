const {Client} = require('pg');

exports.data = function getAllAccess() {

    const db = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'admin',
        port: 5432
    })

    const result = {
        err: null,
        data: null
    };

    const error = (err) => {
        console.log('getAllAccess/error:', err);
        db.end();

        result.err = err;

        return result;
    };

    const executeQuery = () => {
        const query = `
            SELECT 
                id,
                colaborador_nome as collaborator_name,
                data as date,
                acesso_autorizado as authorized_access
            FROM 
                acessos;
        `;

        const succesful = (data) => {
            db.end();

            result.data = data.rows;

            return result;
        };

        return db.query(query)
            .then(succesful)
            .catch(error)
    };

    return db.connect()
        .then(executeQuery)
        .catch(error)
}