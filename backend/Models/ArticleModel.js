import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ArticleModel = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // thumbnail: {}
    // video: {}
    //author
    //tag or category
    //author
    //status

}, {timestamps: true})

const Article = mongoose.model('Article', ArticleModel)

export default Article