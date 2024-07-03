import MissionModel from "../Models/MissionModel.js";


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

export default { add_mission, update_mission }

