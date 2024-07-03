import mongoose from 'mongoose'

const Schema = mongoose.Schema

const LoginSessionsSchema = new Schema({
    email: {
        type: String,
        required:true
    },
    device: {
        type: String,
        required: true,
        default: 'Unknown'
    },
    date_logined: {
        type: String,
        required: true
    }
})

const LoginSessions = mongoose.model('Loginsession', LoginSessionsSchema)

export default LoginSessions