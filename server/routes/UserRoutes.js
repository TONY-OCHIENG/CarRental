import express from 'express'
import { loginuser, userAccountCreation, userName } from '../controllers/Usercontrollers.js'
import { userAuth } from '../middlewares/auth.js'

const userRoutes = express.Router()
userRoutes.post('/register',userAccountCreation)
userRoutes.post('/loginUser',loginuser)
userRoutes.get('/user',userAuth,userName)
export default userRoutes