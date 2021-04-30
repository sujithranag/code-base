const app = require('./app')
const logger = require('./logger')
const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000

server.listen(port, () => {
    if(!port){
        return logger.log('error', 'Server unavailable')
    }
    logger.log('info', 'Server is up on port:'+ port)
})