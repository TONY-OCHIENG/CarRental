import express from 'express'
import { loginUserAdmin, userRole } from '../controllers/Admincontrollers.js'
import { auth } from '../middlewares/auth.js'

const adminRoute = express.Router()
adminRoute.post('/loginAdmin',loginUserAdmin)
adminRoute.get('/role',auth,userRole)

export default adminRoute