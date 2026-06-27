import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const auth = (request,response,next) => {
    const token = request.cookies.token
    if (!token) {
        return response.status(401).json({status: false, message:"You are not loggedin"})
    } else {
        jwt.verify(token,process.env.SECRET,(err,decoded) => {
            if (err) {
                return response.status(401).json({status:false, message:"Access denied"})
            } else {
                request.role = decoded.role
                next()
            }
        })
    }
}

export const userAuth = (request,response,next) => {
    const token = request.cookies.token
    if (!token) {
        return response.status(401).json({status: false, message:"You are not Authenticated"})
    } else {
        jwt.verify(token,process.env.SECRET_USER,(err, decoded) => {
            if (err) {
                return response.status(401).json({status: false, message: "Access denied"})
            } else {
                request.lastName = decoded.lastName
                next()
            }
        })
    }
}