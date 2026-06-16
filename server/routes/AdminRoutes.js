import express from 'express'
import { loginAdmin } from '../controllers/Admincontrollers.js'

const router = express.Router()
router.post("/loginAdmin",loginAdmin)
export default router