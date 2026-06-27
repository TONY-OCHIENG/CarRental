import express from 'express'
import { loginuser, userAccountCreation } from '../controllers/Usercontrollers.js'

const userRoutes = express.Router()
userRoutes.post('/register',userAccountCreation)
userRoutes.post('/loginUser',loginuser)
export default userRoutes