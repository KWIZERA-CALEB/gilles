import Subscriber from '../Models/SubscribersModel.js'
import { validationResult } from 'express-validator'

const add = (req, res)=> {
    //get fields
    let subscriber = new Subscriber({
        email: req.body.email
    })

    //catch errors
    const errors = validationResult(req)
    //check if they exist
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() })
    }

    subscriber.save()
        .then((result)=> {
            console.log(result)
            res.json({
                message: "New User Subscribed"
            })
        })
        .catch((error)=> {
            
            //---errors
            if (error.name === 'ValidationError') {
                // Handle validation errors
                const errorMessages = {};
                for (let field in error.errors) {
                    errorMessages[field] = error.errors[field].message;
                }
                res.status(400).json({
                    message: "Validation Error",
                    errors: errorMessages
                });
            } else {
                console.log(error);
                res.status(500).json({
                    message: "An error occurred",
                });
            }
            //---errors


        })

}

//export
export default { add }