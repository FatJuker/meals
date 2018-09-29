//Middleware
const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
app.set('view engine', 'pug')
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: false}))
const port = process.env.PORT

app.use(express.static(path.join(__dirname, 'public')))

const mealRoutes = require('./routes/meals.js')
const chefRoutes = require('./routes/chefs.js')



 
const mainRoutes = require('./routes/index.js')
//meals
app.use('/', mainRoutes)
app.use('/meals', mealRoutes)
//chefs
app.use('/chefs', chefRoutes)
//randumb
//app.use('/randumb', randumbRoutes)



app.use((req, res, next) => {
    console.log("error")
    res.render("notFound")
})

app.listen(port, () => {
    console.log(`This is running on port, http://localhost:${port}`)
})