import express from 'express'
import { addVehicles, loginUserAdmin, logoutAdmin, userRole } from '../controllers/Admincontrollers.js'
import { auth } from '../middlewares/auth.js'
import { upload } from '../configs/imageupload.js'

const adminRoute = express.Router()
adminRoute.post('/loginAdmin',loginUserAdmin)
adminRoute.get('/role',auth,userRole)
adminRoute.get('/logoutAdmin',logoutAdmin)
adminRoute.post('/addvehicles',upload.single('image'),addVehicles)

export default adminRoute