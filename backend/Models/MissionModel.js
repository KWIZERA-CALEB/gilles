import mongoose from 'mongoose'

const Schema = mongoose.Schema

const MissionModel = new Schema({
    mission_title: {
        type: String,
        required: true
    },
    mission_description: {
        type: String,
        required: true
    }
}, {timestamps: true})

const MissionDetails = mongoose.model('Missiondetail', MissionModel)

export default MissionDetails