import mongoose from 'mongoose'

const Schema = mongoose.Schema

const TeamModel = new Schema({

})

const TeamMembers = mongoose.model('Teammember', TeamModel)

export default TeamMembers