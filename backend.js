/*main routing */
const user = require('./user');
const packs = require('./packs');
const selling = require('./selling');

/*express config */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

/*body-parser */
app.use(bodyParser.json());




/*users routing*/
app.use('/user', user);

/*tourist packs routing */
app.use('/packs', packs);

/*selling routing */
app.use('/selling', selling);




/*Error handling*/
app.use((err, req, res, next) => {
    if (!err) return next();
    console.log(err);
    res.status(500).send('Error :(');
})

/*Server*/
app.listen(port, (req, res) => {
    console.log('corriendo servidor');
});