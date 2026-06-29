import express from 'express'
import { getsingleVehicle, getvehicles, loginuser, logoutUser, userAccountCreation, userName } from '../controllers/Usercontrollers.js'
import { userAuth } from '../middlewares/auth.js'

const userRoutes = express.Router()
userRoutes.post('/register',userAccountCreation)
userRoutes.post('/loginUser',loginuser)
userRoutes.get('/user',userAuth,userName)
userRoutes.get('/logoutUser',logoutUser)
userRoutes.get('/vehiclesBooking',getvehicles)
userRoutes.get('/vehicleSingle',getsingleVehicle)
export default userRoutes