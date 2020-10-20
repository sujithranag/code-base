const mongoose =  require('mongoose')

const postSchema = new mongoose.Schema({
    description: {
        type: String,
        required: false,
        trim: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post