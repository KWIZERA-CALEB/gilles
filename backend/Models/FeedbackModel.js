import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
    full_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Feedback = mongoose.model('Feedback', FeedbackSchema)

export default Feedback

