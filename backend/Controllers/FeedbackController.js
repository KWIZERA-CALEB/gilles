import FeedbackModel from "../Models/FeedbackModel.js";

const add = (req, res)=> {
    let feedback = new FeedbackModel({
        full_name: req.body.full_name,
        email: req.body.email,
        message: req.body.message
    })

    feedback.save()
        .then((result)=> {
            console.log(result)
            res.json({
                message: `New Feed Back`
            })
        })
        .catch((error)=> {
            console.log(error)
            res.json({
                message: "Error occurred"
            })
        })

}

export default { add }