const mongoose = require('mongoose')

const hyderabadcarSchema = new mongoose.Schema({
    car_model: {
        type: String,
        required: true,
        //trim: true
    },
    car_type: {
        type: String,
        required: true,
        //trim: true
    },
    car_number: {
        type: String,
        required: true,
        //trim: true
    },
    owner_id: {
        type: String,
        required: true,
        //trim: true
    },
    owner_name: {
        type: String,
        required: true,
        //trim: true
    }
    // documents: [{
    //     rc: {
    //         type: String,
    //         required: true
    //     }
    //}]
})

const Hyderabadcar = mongoose.model('Hyderabadcar', hyderabadcarSchema)

module.exports = Hyderabadcar