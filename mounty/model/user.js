const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    phone: {
        unique: true,
        type: Number,
        required: true,
        minlength: 8,
        trim: true,
    },
    address: {
            street: String,
            locality: String,
            city: String,
            state: String,
            pincode: String,
            coordinatesType: String,
            coordinates: [Number]
        },
    distance: {
        type: Number
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User