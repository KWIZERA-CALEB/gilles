import mongoose from 'mongoose'

const Schema = mongoose.Schema

const AdminModel = new Schema({
    full_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    //admin_image: String
    title: {      // either admin or editor
        type: String,
        required: true
    },
}, {timestamps: true})

const Admin = mongoose.model('Admin', AdminModel)

export default Admin