const express = require('express')
const router =  express.Router()
const auth = require('../../middleware/auth')

const city = 'hyderabad'

router.get('/'+city+'/cars', async (req, res) => {
    res.send( { Response: 'This is '+city+' cars page' })
})

router.get('/'+city+'/bikes', async (req, res) => {
    res.send( { Response: 'This is '+city+' bikes page' })
})

router.get('/'+city+'/sharedride', async (req, res) => { 
    res.send( { Response: 'This is '+city+' ride page' })
})

module.exports = router