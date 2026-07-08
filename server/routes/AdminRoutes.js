import express from 'express'
import { addVehicles, approveBookings, availableVehicles, bookedvehicleCategory, cancelBooking, checkpointVehicles, countMaintenance, deleteBookings, deleteVehicle, editVehicle, feedbacks, getAllRepairs, getAllVehicles, getBookings, getsingleVehicle, loginUserAdmin, logoutAdmin, maintenance, overduevehicles, rentedVehicles, repairVehicles, returnbookedvehicle, totalEarnings, userRole, vehicleCategory, vehicleTypes } from '../controllers/Admincontrollers.js'
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
adminRoute.get('/availableVehicles',availableVehicles)
adminRoute.get('/rentedvehicles',rentedVehicles)
adminRoute.get('/checkpointvehicle',checkpointVehicles)
adminRoute.get('/overdue',overduevehicles)
adminRoute.get('/countMaintenance',countMaintenance)
adminRoute.get('/totalprice',totalEarnings)
adminRoute.get('/vehicleTypes',vehicleTypes)
adminRoute.get('/vehiclecategory',vehicleCategory)
adminRoute.get('/vehiclebookedcategories',bookedvehicleCategory)
adminRoute.get('/feedback',feedbacks)
adminRoute.delete('deleteBooking/:id',deleteBookings)
export default adminRoute