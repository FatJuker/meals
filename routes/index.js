const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
 const colors = [
      'red',
      'orange',
     'yellow',
      ]
    
    console.log(req.cookies)
    const { username } = req.cookies

    res.render("index", {colors, username})
})
router.get('/notFound', (req, res)=> {
    res.render("notFound")
})
router.get('/obesity', (req, res)=> {
    res.render("g")
  
})
router.post('/login', (req, res) => {

  res.cookie("username", req.body.username)
  res.cookie("password", req.body.password)  
  res.redirect("/")
})


router.post('/goodbye', (req, res) => {

    res.clearCookie('username')
    res.clearCookie('password')
    res.redirect("/")
    console.log("this is working!")
})



module.exports = router