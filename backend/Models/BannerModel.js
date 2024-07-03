import mongoose from 'mongoose'

const Schema = mongoose.Schema

const BannerModel = new Schema({
    banner_title: {
        type: String,
        required: true
    }
},{timestamps: true})

const BannerInfo = mongoose.model('Bannerinfo', BannerModel)

export default BannerInfo