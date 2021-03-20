const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/kamel', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})