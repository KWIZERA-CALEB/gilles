import ManagementController from '../Controllers/ManagementController.js'
import express from 'express'

//----
const route = express.Router()
//----

route.post('/add_mission', ManagementController.add_mission)
route.put('/update_mission/:id', ManagementController.update_mission)

route.post('/add_ceo_info', ManagementController.add_ceo_info)
route.put('/update_ceo_info/:id', ManagementController.update_ceo_info)

route.post('/add_contactus_info', ManagementController.add_contactus_info)
route.put('/update_contactus_info/:id', ManagementController.update_contactus_info)

route.post('/add_banner_details', ManagementController.add_banner_details)
route.put('/update_banner_details/:id', ManagementController.update_banner_details)

export default route