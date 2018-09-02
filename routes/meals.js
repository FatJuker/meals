const express = require('express')
const json = require('../data/meals.json')
const router = express.Router()

router.get('/', (req, res) => {
    //Const generator = Math.random 
})
router.get('/:id', (req, res ) => {
    const mealData = json.meals[req.params.id]
    res.render('meal', mealData)
})
// req.params.id  or, just /
// redirect to random 
module.exports = router