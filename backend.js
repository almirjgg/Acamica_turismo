const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
/*body-parser */
app.use(bodyParser.json());


/*selling routes */
app.get('/ventas', (req, res) => {
    res.status(200).send('ok');
})
app.get('/ventas/:id', (req, res) => {
    res.status(200).send('ok');
})

/*tourist packs */
app.get('/paquetes', (req, res) => {
    res.status(200).send(paquete);
})



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