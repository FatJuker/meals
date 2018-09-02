//Middleware
const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const app = express()
app.set('view engine', 'pug')
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: false}))
const port = process.env.PORT

const mealRoutes = require('./routes/meals.js')
const chefRoutes = require('./routes/chefs.js')


/*** KEVINS COMMENTS
 * you need to import the chefs.js routes and use them look at the code for your meals routes
 ***/
 
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