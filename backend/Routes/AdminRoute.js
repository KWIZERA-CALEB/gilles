import AdminController from "../Controllers/AdminController.js";
import verifyToken from "../Middlewares/Authorization.js";
import express from 'express'

//---
const route = express.Router()
//---

route.post('/add_admin', AdminController.add)
route.post('/admin_login', AdminController.login)
route.get('/admin_info',verifyToken, AdminController.admin_info)

export default route