const { Router } = require('express');
const router = Router();



router.get('/', (req, res) => {
    res.status(200).send('ok')
})

router.post('/createSell', (req, res) => {

})

module.exports = router;