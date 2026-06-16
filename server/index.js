import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import conn from './configs/db.js'
import router from './routes/AdminRoutes.js'
dotenv.config()

const app = express()
//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use('/auth',router)

app.listen(process.env.PORT, () => {
    console.log("server is running")
})