const { Router } = require('express');
const router = Router();

const users = [];

router.post('/login', (req, res) => {
    const user = req.body;
    if (!user) {
        res.status(404);
    }
    res.status(200);
})

router.post('/register', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).send('ok');
})

module.exports = router;