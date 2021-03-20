const express = require('express')
const router =  express.Router()
const Admin = require('../../models/admin')
const auth = require('../../middleware/auth')
const Hyderabadcar = require('../../models/hyderabadcars')

router.post('/admin/register', async (req, res) => {
    const admin = new Admin(req.body)
    
    try {
        await admin.save()
        res.status(201).send({ admin })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/admin', async (req, res) => {
    try {
        const admin = await Admin.findByCredentials(req.body.username, req.body.password)
        const token = await admin.generateAuthToken()
        res.send({ admin, token})
    } catch(e) {
        res.status(400).send()
    }
})

router.post('/admin/hyderabadcars', async (req, res) => {
    const hyderabadcar = new Hyderabadcar(req.body)

    try {
        await hyderabadcar.save()
        res.status(201).send( { hyderabadcar } )
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router