import express from 'express'
import { auth } from '../middlewares/auth.js'
import { loginUser, userRole } from '../controllers/Logincontroller.js'

const roleRoute = express.Router()
roleRoute.post('/loginUser',loginUser)
roleRoute.get('/role',auth,userRole)
export default roleRoute