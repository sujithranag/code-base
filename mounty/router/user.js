const express = require('express')
const router =  express.Router()
const User = require('../model/user')

//Router to create new users
router.post('/register', async (req, res) => {
    const user = new User(req.body)
    
    try {
        await user.save()
        res.status(201).send({ user })
    } catch (e) {
        res.status(400).send(e)
    }
})

//Router to update users data by considering phone as unique field
router.patch('/userupdate', async (req, res) => {

    User.findOneAndUpdate(req.query.phone, req.body, function (err, user) {
        if(err) {
            res.status(400).send(err)
        } else {
            res.send(user)
        }
    })
})

//Router to get list of all users
router.get('/allusers', async(req, res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch((e) => {
        res.status(500).send()
    })
    
})

//Router to delete user
router.delete('/deleteuser', async (req, res) => {

    User.findOneAndRemove(req.body, function(err, user) {
        if(err) {
            res.status(500).send()
        } else {
            res.send(user)
        }
    })
})

module.exports = router