import express from 'express'
import { userAccountCreation } from '../controllers/Usercontrollers'

const userRoutes = express.Router()
userRoutes.post('/register',userAccountCreation)
export default userRoutes