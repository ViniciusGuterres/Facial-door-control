const express = require('express');
const app = express();
const cors = require('cors');
const usersRoutes = require('./routes/users');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Working');
});

usersRoutes(app);

app.listen(3010, () => {
    console.log('ok');
})