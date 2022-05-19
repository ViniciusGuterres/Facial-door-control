'use strict';

const getAccessHistory = require('../controllers/getAccessHistory.js') ;

module.exports = function(app) {
    
    app.route('/AccessHistory')
        .get(getAccessHistory.get_access_history);
}