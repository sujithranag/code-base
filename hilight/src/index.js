const express =  require('express')
const path =  require('path')
require('./db/mongoose')
//const User = require('./models/user')
const userRouter =  require('./routers/user')

const app = express()
const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public') 

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })

app.use(express.static(publicDirectoryPath))
app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log('Server is up on port: '+port)
})