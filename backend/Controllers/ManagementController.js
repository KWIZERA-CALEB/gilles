import MissionModel from "../Models/MissionModel.js";
import CeoModel from "../Models/CeoModel.js";
import ContactUsModel from "../Models/ContactUsModel.js";
import BannerModel from "../Models/BannerModel.js";



const add_mission = (req, res)=> {
    let mission = new MissionModel({
        mission_title: req.body.mission_title,
        mission_description: req.body.mission_description
    })

    mission.save()
        .then((result)=> {
            console.log(result)
            res.json({
                message: "Added Mission Details"
            })
        })
        .catch((error)=> {
            console.log(error)
            res.json({
                message: "Failed to Add Mission"
            })
        })

}



const update_mission = (req, res)=> {
    //distructure the id from the parameters of url
    const { id } = req.params

    let updatedMissionDetails = {
        mission_title: req.body.mission_title,
        mission_description: req.body.mission_description
    }

    MissionModel.findByIdAndUpdate(id, {$set: updatedMissionDetails})
        .then((result)=> {
            console.log(result)
            res.json({
                message: 'Updated Mission'
            })
        })
        .catch((error)=> {
            console.log(error)
            res.json({
                message: 'Failed to Update Mission'
            })
        })
}



const add_ceo_info = (req, res)=> {
    let ceo_info = new CeoModel({
        ceo_name: req.body.ceo_name,
        message_from_ceo: req.body.message_from_ceo
    })

    ceo_info.save()
        .then((result)=> {
            console.log(result)
            res.json({
                message: "Added Ceo Info"
            })
        })
        .catch((error)=> {
            console.log(error)
            res.json({
                message: "Failed to add Ceo Info"
            })
        })

}



const update_ceo_info = (req, res)=> {
    //distructure the id from the parameters of url
    const { id } = req.params

    let updatedCeoInfoDetails = {
        ceo_name: req.body.ceo_name,
        message_from_ceo: req.body.message_from_ceo
    }

    CeoModel.findByIdAndUpdate(id, {$set: updatedCeoInfoDetails})
        .then((result)=> {
            console.log(result)
            res.json({
                message: 'Updated Ceo Info'
            })
        })
        .catch((error)=> {
            console.log(error)
            res.json({
                message: 'Failed to Update Ceo Info'
            })
        })
}


const add_contactus_info = (req, res)=> {
    let contactus_info = new ContactUsModel({
        email: req.body.email,
        phone: req.body.phone,
        headquarters: req.body.headquarters
    })

    contactus_info.save()
        .then((result)=> {
            console.log(result)
            res.json({
                message: "Added Contactus Info"
            })
        })
        .catch((error)=> {
            console.log(error)
            res.json({
                message: "Failed to add Contactus Info"
            })
        })

}

const update_contactus_info = (req, res)=> {
    //distructure the id from the parameters of url
    const { id } = req.params

    let updatedContactusInfoDetails = {
        email: req.body.email,
        phone: req.body.phone,
        headquarters: req.body.headquarters
    }

    ContactUsModel.findByIdAndUpdate(id, {$set: updatedContactusInfoDetails})
        .then((result)=> {
            console.log(result)
            res.json({
                message: 'Updated Contactus Info'
            })
        })
        .catch((error)=> {
            console.log(error)
            res.json({
                message: 'Failed to Update Contactus Info'
            })
        })
}

const add_banner_details = (req, res)=> {
    let banner_details = new BannerModel({
        banner_title: req.body.banner_title
    })

    banner_details.save()
        .then((result)=> {
            console.log(result)
            res.json({
                message: "Added Banner Details"
            })
        })
        .catch((error)=> {
            console.log(error)
            res.json({
                message: "Failed to add Banner Details"
            })
        })

}

const update_banner_details = (req, res)=> {
    //distructure the id from the parameters of url
    const { id } = req.params

    let updatedBannerDetails = {
        banner_title: req.body.banner_title
    }

    BannerModel.findByIdAndUpdate(id, {$set: updatedBannerDetails})
        .then((result)=> {
            console.log(result)
            res.json({
                message: 'Updated Banner Details'
            })
        })
        .catch((error)=> {
            console.log(error)
            res.json({
                message: 'Failed to Update Banner Details'
            })
        })
}

export default { add_mission, update_mission, add_ceo_info, update_ceo_info, add_contactus_info, update_contactus_info, add_banner_details, update_banner_details }

