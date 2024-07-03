import FeedbackController from '../Controllers/FeedbackController.js'
import express from 'express'

//---
const route = express.Router()
//---

route.post('/sendfeedback', FeedbackController.add)


export default route