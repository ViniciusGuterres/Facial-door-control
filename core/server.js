const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

require('./routes/index.js')(app);

app.use(cors({
    origin: '*'
}));

app.use(bodyParser.json());

app.listen(8080, () => {
    console.log('Server on in port 8080');
});