const bodyParser = require('body-parser');

// Controllers
const getAccessHistory = require('../controllers/getAccessHistory.js').getAccessHistory;
const getUsersController = require('../controllers/getUsers.js').getUsers;
const generatedAccessReport = require('../controllers/generatedAccessReport.js').generatedAccessReport;

module.exports = function (app) {
    app.get('/AccessHistory', getAccessHistory);
    app.get('/getUsers/:id?', getUsersController);
    app.get('/generatedAccessReport', generatedAccessReport);
}

// module.exports = (app) => {
//     app.post('/createUser', bodyParser.json(), saveUserController);
//     app.delete('/deleteUser/:id', deleteUserController);
//     app.put('/updateUser/:id', bodyParser.json(), updateUserController);
// }