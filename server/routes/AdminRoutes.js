import express from 'express'
import { adminRole, loginAdmin } from '../controllers/Admincontrollers.js'
import { auth } from '../middlewares/auth.js'

const router = express.Router()
router.post("/loginAdmin",loginAdmin)
router.get('/',auth, adminRole)
export default router