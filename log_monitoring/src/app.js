const path = require('path')
const express = require('express')
require('./mongodb')
const web_route = require('./routers/route')

const app = express()
const viewsPath = path.join(__dirname, '../views')
app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.get('', (req, res) => {
    res.render('index')
})

app.use(web_route)

module.exports = app