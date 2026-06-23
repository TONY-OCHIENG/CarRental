import conn from "../configs/db.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const loginUserAdmin = (request, response) => {
    const { email, password} = request.body
    if (email === "" || password === "") {
        return response.status(200).json({status: false, message: "Please fill all required fields"})
    }
    try {
        const sqlQuerry = "SELECT * FROM admin WHERE email = ? AND password = ?"
        conn.query(sqlQuerry,[email,password], (error,result) => {
            if (error) return response.status(200).json({status: false, message: error})
            if (result.length > 0) {
                const role = result[0].role
                const token = jwt.sign({role},process.env.SECRET,{expiresIn:'2d'})
                response.cookie('token',token)
                return response.status(200).json({status:true, message:"login successfully"})
            } else {
                return response.status(200).json({status: false, message: "wrong email or password"})
            }
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message:"Internal server error"})
    }
}


export const userRole = (request,response) => {
    return response.status(200).json({status: true, role: request.role})
}

export const logoutAdmin = (request,response) => {
    response.clearCookie('token')
    return response.status(200).json({status: true, message:"logout successfully"})
}

export const addVehicles = (request,response) => {
    const {name,capacity,price,type} = request.body
    const { filename } = request.file
    console.log(name,capacity,price,type,filename)
    if (name === "" || capacity === "" || price === "" || type === "" || filename === "" ){
        response.status(200).json({status:true, message:"Please fill all fields"})
    }
    try {
        const sqlQuerry = "INSERT INTO vehicles(vehicleName,vehicleCapacity,vehiclePrice,vehicleType,vehicleImage) VALUES(?,?,?,?,?)"
        conn.query(sqlQuerry,[name,capacity,price,type,filename], (error,result) => {
            if (error) return response.status(200).json({status: false, message:error})
            return response.status(201).json({status:true, message:"Vehicle added successfully"})
        })

    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message:"Internal server error"})
    }
}