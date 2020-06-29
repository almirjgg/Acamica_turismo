const { Router } = require('express');
const router = Router();


const packs = [
    {
      id: 1,
      imagen:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/88/27/882789_v7.jpeg",
      descripcion: "Si queres relajarte, este es el lugar",
      titulo: "Punta Cana",
      precio: "USD 2000",
    },
    {
      id: 2,
      imagen:
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000//uploadimages/23/20/23208666.jpeg",
      descripcion: "Si te gusta la aventura, no te podes perder estas montanas",
      titulo: "San Martin de los Andes",
      Precio: "USD 1200",
    },
    {
      id: 3,
      imagen: "https://bucket1.glanacion.com/anexos/fotos/01/2721801.jpg",
      descripcion: "Vola bajito en las pistas de Sky",
      titulo: "Las Leñas",
      precio: "USD 1700",
    },
    {
      id: 4,
      imagen: "https://madryn.org/wp-content/uploads/2017/02/ushuaia.jpg",
      descripcion: "Sorprendete con la ciudad mas austral",
      titulo: "Ushuaia",
      precio: "USD 1500",
    },
    {
      id: 5,
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/9/97/Foz_de_Igua%C3%A7u_27_Panorama_Nov_2005.jpg",
      descripcion: "Una de las maravillas del mundo",
      titulo: "Cataratas del Iguazu",
      precio: "USD 1000",
    },
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