const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;







/*Server*/
app.listen(port, (req, res) => {
    console.log('corriendo servidor');
});