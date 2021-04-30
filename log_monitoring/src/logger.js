const {createLogger, transports, format} = require('winston')

const logger = createLogger({
    transports: [
        new transports.File({
            filename: 'logs.log',
            level: 'info',
            format: format.combine(format.timestamp(), format.json())
        }),
        new transports.File({
            filename: 'logs.log',
            level: 'success',
            format: format.combine(format.timestamp(), format.json())
        }),
        new transports.File({
            filename: 'logs.log',
            level: 'error',
            format: format.combine(format.timestamp(), format.json())
        }),
        new transports.File({
            filename: 'logs.log',
            level: 'debug',
            format: format.combine(format.timestamp(), format.json())
        })
    ]
})

module.exports = logger