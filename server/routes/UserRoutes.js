import express from 'express'
import { bookCar, getsingleVehicle, getvehicles, loginuser, logoutUser, userAccountCreation, userName } from '../controllers/Usercontrollers.js'
import { userAuth } from '../middlewares/auth.js'

const userRoutes = express.Router()
userRoutes.post('/register',userAccountCreation)
userRoutes.post('/loginUser',loginuser)
userRoutes.get('/user',userAuth,userName)
userRoutes.get('/logoutUser',logoutUser)
userRoutes.get('/vehiclesBooking',getvehicles)
userRoutes.get('/vehicleSingle/:id',getsingleVehicle)
userRoutes.post('/bookCar/:id',bookCar)
export default userRoutes