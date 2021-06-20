const express = require('express')
require('./db/mongoose')
const user =  require('./router/user')

const port = 3000
const app = express()

app.use(express.json())
app.use(user)

app.listen(port, () => {
    console.log('server is up on port: '+port)
})