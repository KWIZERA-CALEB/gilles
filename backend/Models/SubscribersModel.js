import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SubscribersSchema = new Schema({
    email: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Subscriber = mongoose.model('Subscriber', SubscribersSchema)


export default Subscriber