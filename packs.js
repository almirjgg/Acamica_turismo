const { Router } = require('express');
const router = Router();


const packs = [{
        id: 1,
        imagen: 'img1',
        descripcion: "Si queres relajarte, este es el lugar",
        titulo: "Punta Cana",
        precio: "USD 2000",
        vendido: false
    },
    {
        id: 2,
        imagen: 'img2',
        descripcion: "Si te gusta la aventura, no te podes perder estas montanas",
        titulo: "San Martin de los Andes",
        Precio: "USD 1200",
        vendido: false
    },
    {
        id: 3,
        imagen: 'img3',
        descripcion: "Vola bajito en las pistas de Sky",
        titulo: "Las Lenas",
        precio: "USD 1700",
        vendido: false
    },
    {
        id: 4,
        imagen: 'img4',
        descripcion: "Sorprendete con la ciudad mas austral",
        titulo: "Ushuaia",
        precio: "USD 1500",
        vendido: false
    },
    {
        id: 5,
        imagen: 'img4',
        descripcion: "Una de las maravillas del mundo",
        titulo: "Cataratas del Iguazu",
        precio: "USD 1000",
        vendido: false
    }
];


/* Middleware */

function notFound(req,res,next){
    const id = req.params.id;
    const packFound = packs.find(pack => pack.id == id);
    if(!packFound){
        res.status(404).send('Pack inexistente');
    } else {
        res.status(200).send(packFound);
    }
    next();
}


/*tourist packs */
router.get('/', (req, res) => {
    console.log(req);
    res.status(200).send(packs);
})

router.post('/register_packs', (req, res) => {
    const pack = req.body;
    packs.push(pack);
    res.status(200).send("added");
})

router.get('/:id', notFound,(req,res)=>{
    // const id = req.params.id;
    // const packFound = packs.find(pack => pack.id == id);
})

module.exports = router;