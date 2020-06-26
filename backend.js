const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const paquetes = [
    {
        id: 1,
        imagen: img1,
        descripcion: "Si queres relajarte, este es el lugar",
        titulo: "Punta Cana",
        precio: "USD 2000"
    },
    {
        id: 2,
        imagen: img2,
        descripcion: "Si te gusta la aventura, no te podes perder estas montanas",
        titulo: "San Martin de los Andes",
        Precio: "USD 1200"
    },
    {
        id: 3,
        imagen: img3,
        descripcion: "Vola bajito en las pistas de Sky",
        titulo: "Las Lenas",
        precio: "USD 1700"
    },
    {
        id: 4,
        imagen: img4,
        descripcion: "Sorprendete con la ciudad mas austral",
        titulo: "Ushuaia",
        precio: "USD 1500"
    },
    {
        id: 5,
        imagen: img4,
        descripcion: "Una de las maravillas del mundo",
        titulo: "Cataratas del Iguazu",
        precio: "USD 1000"
    }
];

app.listen(port, (req, res) => {
    console.log('corriendo servidor');
});