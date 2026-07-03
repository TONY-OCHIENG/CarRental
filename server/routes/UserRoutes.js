import express from 'express'
import { bookCar, bookingDetails, cancelBooking, createFeedback, edituser, getsingleUser, getsingleVehicle, getvehicles, loginuser, logoutUser, returnVehicle, updateBookingstatus, userAccountCreation, userName } from '../controllers/Usercontrollers.js'
import { userAuth } from '../middlewares/auth.js'

const userRoutes = express.Router()
userRoutes.post('/register',userAccountCreation)
userRoutes.post('/loginUser',loginuser)
userRoutes.get('/user',userAuth,userName)
userRoutes.get('/logoutUser',logoutUser)
userRoutes.get('/vehiclesBooking',getvehicles)
userRoutes.get('/vehicleSingle/:id',getsingleVehicle)
userRoutes.post('/bookCar/:id',bookCar)
userRoutes.put('/updateBooking/:id',updateBookingstatus)
userRoutes.get('/getbookingDetail/:id',bookingDetails)
userRoutes.put('/returnVehicle/:id',returnVehicle)
userRoutes.put('/cancelBooking/:id',cancelBooking)
userRoutes.post('/feedback',createFeedback)
userRoutes.get('/user/:id',getsingleUser)
userRoutes.put('/edituser/:id',edituser)
export default userRoutes