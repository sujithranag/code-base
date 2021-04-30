const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
                type: String
        },
    age: {
                type: Number
        }
    
})

const User = mongoose.model('User', userSchema)

//Here are the commented lines which I hard-coded for user creation in Mongodb.

// const me = new User({
//     name: 'Ganesh',
//     age: 24
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })

module.exports = User