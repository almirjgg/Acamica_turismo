const user = require('./user');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.post('/', user);

app.listen(port, (req, res) => {
    console.log('corriendo servidor');
});