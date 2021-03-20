const express = require('express')
const router =  express.Router()
const Owner = require('../../models/owner')
const auth = require('../../middleware/auth')

router.post('/owner/register', async (req, res) => {
    const owner = new Owner(req.body)
    
    try {
        await owner.save()
        const token = await owner.generateAuthToken()
        res.status(201).send({ owner, token})
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/owner', async (req, res) => {
    try {
        const owner = await Owner.findByCredentials(req.body.email, req.body.password)
        const token = await owner.generateAuthToken()
        res.send({ owner, token})
    } catch(e) {
        res.status(400).send()
    }
})

module.exports = router