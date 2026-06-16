import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
dotenv.config()

const app = express()
//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json())


app.listen(3000, () => {
    console.log("server is running")
})