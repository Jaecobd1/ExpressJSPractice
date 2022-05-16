const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
    res.send("User List")
})

router.get('/new', (req, res) => {
    res.send("User New Form")
})

router.post('/', (req, res) => {
    res.send('Create User')
})

router.get('/:id', (req, res) => {
    req.params.id
    res.send("User Get") 
})
router.put('/:id', (req, res) => {
    req.params.id
    res.send("User Update") 
})
router.delete('/:id', (req, res) => {
    req.params.id
    res.send("User Delete") 
})

module.exports = router