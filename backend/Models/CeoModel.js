import mongoose from "mongoose"

const Schema = mongoose.Schema

const CeoModel = new Schema({
    message_from_ceo: {
        type: String,
        required: true
    },
    ceo_name: {
        type: String,
        required: true
    },
    ceo_image: {
        type: String,
        required: true
    }
}, {timestamps: true})

const CeoInfo = mongoose.model('Ceoinfo', CeoModel)

export default CeoInfo