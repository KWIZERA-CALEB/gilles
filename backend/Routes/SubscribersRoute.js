import express from "express";
import { body } from 'express-validator'
import SubscribersController from '../Controllers/SubscribersController.js'

//---
const route = express.Router()
//---


route.post('/subscribe',
    [
        body('email')
            .notEmpty().withMessage('Email is required')
            .isEmail().withMessage('Invalid email')
    ],
    SubscribersController.add)




export default route
