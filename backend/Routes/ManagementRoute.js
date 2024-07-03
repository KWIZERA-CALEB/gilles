import ManagementController from '../Controllers/ManagementController.js'
import express from 'express'

//----
const route = express.Router()
//----

route.post('/add_mission', ManagementController.add_mission)
route.post('/update_mission/', ManagementController.update_mission)

export default route