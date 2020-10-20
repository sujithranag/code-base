const express = require('express')
const auth =  require('../middleware/auth')
const Post = require('../models/post')
const router =  new express.Router()
const multer =  require('multer')

const upload_post = multer({
    dest: 'posts',
    limits: {
        fileSize: 10000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpeg|jpg|png)$/)) {
            return cb(new Error('Upload an image.'))
        }

        cb(undefined, true)
    }
})

router.post('/posts', auth, upload_post.single('upload_post'), async (req, res) => {
    const post = new Post({
        ...req.body,
        owner: req.user._id
    })

    try {
        await post.save()
        res.status(201).send(post)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/posts', auth, async (req, res) => {
    try {
        await req.user.populate('posts').execPopulate()
        res.send(req.user.posts)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/posts/:id', auth, async (req, res) => {
    const _id = req.params.id

    try {
        const post = await Post.findOne({_id, owner: req.user._id})

        if(!post) {
            res.status(404).send()
        }

        res.send(post)
    }

    catch (e) {
        res.status(500).send()
    }
})

router.delete('/posts/:id', auth, async (req, res) => {
    try {
        const post = await Post.findOneAndDelete({_id: req.params.id, owner: req.user._id})

        if(!post) {
            res.status(404).send()
        }

        res.send(post)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router