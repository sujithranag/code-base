const express = require('express')
require('./db/mongoose')
const customer_route = require('./routers/customer/user')
const owner_route = require('./routers/owner/owner')
const admin_route = require('./routers/admin/admin')

const port = 3000
const app = express()

app.use(express.json())
app.use(customer_route)
app.use(owner_route)
app.use(admin_route)

app.listen(port, () => {
    console.log('server is up on port: '+port)
})