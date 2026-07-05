import express from 'express'
import { addVehicles, approveBookings, cancelBooking, deleteVehicle, editVehicle, getAllRepairs, getAllVehicles, getBookings, getsingleVehicle, loginUserAdmin, logoutAdmin, maintenance, repairVehicles, returnbookedvehicle, userRole } from '../controllers/Admincontrollers.js'
import { auth } from '../middlewares/auth.js'
import { upload } from '../configs/imageupload.js'

const adminRoute = express.Router()
adminRoute.post('/loginAdmin',loginUserAdmin)
adminRoute.get('/role',auth,userRole)
adminRoute.get('/logoutAdmin',logoutAdmin)
adminRoute.post('/addvehicles',upload.single('image'),addVehicles)
adminRoute.get('/vehicles',getAllVehicles)
adminRoute.get('/vehicles/:id',getsingleVehicle)
adminRoute.put('/vehicles/:id',editVehicle)
adminRoute.delete('/vehicles/:id',deleteVehicle)
adminRoute.put('/maintenance/:id',repairVehicles)
adminRoute.get('/repair',getAllRepairs)
adminRoute.put('/repair/:id',maintenance)
adminRoute.get('/userbookings',getBookings)
adminRoute.put('/approveBookings/:id', approveBookings)
adminRoute.put('/returnBookedvehicle/:id',returnbookedvehicle)
adminRoute.put('/canceledBooking/:id',cancelBooking)
export default adminRoute