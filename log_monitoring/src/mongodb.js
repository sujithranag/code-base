const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/log-monitor', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// })

// const me = new User({
//     name: 'Sujith',
//     age: 24
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })