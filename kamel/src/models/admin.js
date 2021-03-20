const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const adminSchema = new mongoose.Schema({ 
    username: {
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
adminSchema.methods.toJSON = function () {
    const admin = this
    const adminObject = admin.toObject()

    delete adminObject.password
    delete adminObject.tokens
    //delete Object.avatar

    return adminObject
}

adminSchema.statics.findByCredentials = async (username, password) => {
    const admin = await Admin.findOne({ username })

    if (!admin) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, admin.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return admin
}

adminSchema.methods.generateAuthToken = async function () {
    const admin = this
    const token = jwt.sign({ _id: admin._id.toString() }, 'weplaybasketball')

    admin.tokens = admin.tokens.concat({ token })
    await admin.save()

    return token
}

//isModified works when the user updates the pwd or creates the new pwd
adminSchema.pre('save', async function (next) {
    const admin = this

    if(admin.isModified('password')) {
        admin.password = await bcrypt.hash(admin.password, 8)
    }

    next()
})

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin