import AdminController from "../Controllers/AdminController.js";
import express from 'express'

//---
const route = express.Router()
//---

route.post('/add_admin', AdminController.add)

export default route