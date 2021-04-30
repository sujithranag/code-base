const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const logger = require('../logger')
const router = new express.Router()
const User = require('../models/user_model')
const path = require('path')
const fs = require('fs')
const io = require("socket.io")

router.get('/ping', async (req, res) => {
    User.find({}).then((users) => {
        logger.log('success', 'Fetching users list')
        setTimeout(() => {res.send(users)}, 2000)
        
    }).catch((e) => {
        logger.log('debug', 'Infrastructure at peak load')
        res.status(404).send(e)
    })
})

router.get('/monitor', async (req, res) => {
    logger.log('info', 'admin logged in')
    res.sendFile(path.join(__dirname, '../../logs.log'))
    io.sockets.on('connection', function(socket) {
        fs.watch(path.join(__dirname, '../../logs.log'), function(event, filename) {
            console.log("Event:", event);
    
            if (event == "change") {
                fs.readFile(path.join(__dirname, '../../logs.log'),"UTF-8", function(err, data) {
                    if (err) throw err
                    socket.emit("receiveFile", data )
                })
            }
    
        })
    
    })
})

module.exports = router