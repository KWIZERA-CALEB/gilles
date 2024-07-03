import mongoose, { mongo } from 'mongoose'

const Schema = mongoose.Schema

const LoginSessionsSchema = new Schema({
    email: {
        type: String,
        required:true
    }
    loginedDate: Date
})

const LoginSessions = mongoose.model()