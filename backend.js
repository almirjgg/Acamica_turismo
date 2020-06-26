const user = require('./user');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
/*body-parser */
app.use(bodyParser.json());

app.post('/', user);

const paquetes = [{
        id: 1,
        imagen: 'img1',
        descripcion: "Si queres relajarte, este es el lugar",
        titulo: "Punta Cana",
        precio: "USD 2000"
    },
    {
        id: 2,
        imagen: 'img2',
        descripcion: "Si te gusta la aventura, no te podes perder estas montanas",
        titulo: "San Martin de los Andes",
        Precio: "USD 1200"
    },
    {
        id: 3,
        imagen: 'img3',
        descripcion: "Vola bajito en las pistas de Sky",
        titulo: "Las Lenas",
        precio: "USD 1700"
    },
    {
        id: 4,
        imagen: 'img4',
        descripcion: "Sorprendete con la ciudad mas austral",
        titulo: "Ushuaia",
        precio: "USD 1500"
    },
    {
        id: 5,
        imagen: 'img4',
        descripcion: "Una de las maravillas del mundo",
        titulo: "Cataratas del Iguazu",
        precio: "USD 1000"
    }
];


/*compra paquetes*/
app.get('/paquetes/compra/:id', (req, res) => {
    const id = req.params.id
    const paquete = paquetes.find(paquete => paquete.id == id);
    if (paquete == undefined) {
        res.statusCode = 404;
        res.json({mensaje: "Paquete no disponible"})
    } else {
        res.json(paquete)
    }
});


/*selling routes */
app.get('/ventas', (req, res) => {
    res.status(200).send('ok');
})
app.get('/ventas/:id', (req, res) => {
    res.status(200).send('ok');
})

/*tourist packs */
app.get('/paquetes', (req, res) => {
    res.status(200).send(paquetes);
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