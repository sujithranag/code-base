const express = require('express')
const router =  express.Router()
const User = require('../../models/user')
const auth = require('../../middleware/auth')

const city = 'hyderabad'

router.get('/', async (req, res) => {
    res.send( { Response: 'This is web page' })
})

router.get('/home', async (req, res) => {
    res.send( {Response: 'This is home page'})
})

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