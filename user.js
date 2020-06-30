const { Router } = require('express');
const router = Router();

const users = [
    {
        id: 1,
        username: "Gabriel123",
        password: "asd123"
    }
];


/* Verificar si es usuario registrado*/

function isUser(req, res, next){
    const {username, password} = req.body;
    console.log(req.body);
    const userFound = users.find(user => user.username == username && user.password == password);
    if(!userFound){
        res.status(404).send("Anda a registrarte uachin ")
        // res.redirect('./register'); <-- Funciona pero la ruta creada es un POST
    }
    next();
}

router.post('/login', isUser,(req, res) => {
    res.status(200)
    res.redirect('../packs');
})

router.post('/register', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).send('ok');
}) 

router.get('/',(req,res)=>{
    res.status(201).send(users);
})

module.exports = router;