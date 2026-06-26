import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import conn from './configs/db.js'
import adminRoute from './routes/AdminRoutes.js'
import userRoutes from './routes/UserRoutes.js'
dotenv.config()

const app = express()
//middlewares
app.use(cors({
    origin:'http://localhost:5173',
    methods:['PUT','GET','POST','DELETE'],
    credentials:true,
}))
app.use(cookieParser())
app.use(express.json())
app.use('/auth',adminRoute)
app.use('/auth',userRoutes)
app.use(express.static('public'))

app.listen(process.env.PORT, () => {
    console.log("server is running")
})