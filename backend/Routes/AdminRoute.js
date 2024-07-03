import AdminController from "../Controllers/AdminController.js";
import express from 'express'

//---
const route = express.Router()
//---

route.post('/add_admin', AdminController.add)
route.post('/admin_login', AdminController.login)

export default route