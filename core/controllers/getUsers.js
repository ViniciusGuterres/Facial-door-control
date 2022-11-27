// Requires model
const getUsersModel = require('../model/getUsers.js').getUsers;

async function getUsers(req, res, next) {
    const objReturn = {
        data: null,
        error: null
    }

    let modelParams = {}

    if (req?.params?.id) {
        modelParams.id = req.params.id;
    }

    const getUsersRes = await getUsersModel(modelParams);

    if (getUsersRes.err || !getUsersRes.data?.length) {
        objReturn.error = getUsersRes.err || 'NO RESPONSE FROM getUsers model';
        controllerReturn(objReturn, res);
        return;
    }

    objReturn.data = getUsersRes.data;
    controllerReturn(objReturn, res);
};

function controllerReturn(objReturn, res) {
    const { error, data } = objReturn;

    if (error || !data) {
        res.status(406).send(objReturn);
        return;
    }

    res.status(201).send(objReturn);
}

exports.getUsers = getUsers;