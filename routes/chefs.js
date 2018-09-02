const express = require('express')
const json = require('../data/chefs.json')
const router = express.Router()

router.get('/', (req, res) => {

    res.render('chefs', { "chefs": json.chefs })
})

router.get('/randumb', (req, res) => {
    const generator = Math.floor(Math.random() * json.chefs.length)
    res.redirect(`/chefs/${generator}`)
})

router.get('/:id', (req, res) => {
    const chefData = json.chefs[req.params.id]
    res.render('chef', chefData)
})



// req.params.id  or, just /
// redirect to random 
module.exports = router
