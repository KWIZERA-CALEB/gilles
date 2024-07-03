import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ContactInfoModel = new Schema({
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    headquarters: {
        type: String,
        required: true
    }
}, {timestamps: true})

const ContactInfo = mongoose.model('Contactinfo', ContactInfoModel)

export default ContactInfo