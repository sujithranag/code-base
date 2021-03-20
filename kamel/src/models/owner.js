const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const ownerSchema = new mongoose.Schema({
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
    password: {
        type: String,
        required: true,
        minlength: 8,
        trim: true,
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

/*ownerSchema.virtual('posts', {
    ref: 'Post',
    localField: '_id',
    foreignField: 'owner'
})*/

/*When a Mongoose document is passed to res.send, Mongoose converts the object into
JSON. You can customize this by adding toJSON as a method on the object. The method
below removes the password and tokens properties before sending the response back*/
ownerSchema.methods.toJSON = function () {
    const owner = this
    const ownerObject = owner.toObject()

    delete ownerObject.password
    delete ownerObject.tokens
    //delete Object.avatar

    return ownerObject
}

ownerSchema.statics.findByCredentials = async (email, password) => {
    const owner = await Owner.findOne({ email })

    if (!owner) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, owner.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return owner
}

ownerSchema.methods.generateAuthToken = async function () {
    const owner = this
    const token = jwt.sign({ _id: owner._id.toString() }, 'weplaybasketball')

    owner.tokens = owner.tokens.concat({ token })
    await owner.save()

    return token
}

//isModified works when the user updates the pwd or creates the new pwd
ownerSchema.pre('save', async function (next) {
    const owner = this

    if(owner.isModified('password')) {
        owner.password = await bcrypt.hash(owner.password, 8)
    }

    next()
})

const Owner = mongoose.model('Owner', ownerSchema)

module.exports = Owner