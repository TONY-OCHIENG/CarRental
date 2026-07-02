import conn from "../configs/db.js"
import { comparepassword, hashPassword } from "../configs/passwordHash.js"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const userAccountCreation = (request,response) => {
    const {firstname, lastname, email,password} = request.body
    const hpassword = hashPassword(password)
    try {
        const sqlQuerry = "INSERT INTO users(firstName,lastName,email,password) VALUES(?,?,?,?)"
        conn.query(sqlQuerry,[firstname,lastname,email,hpassword],(error,result) => {
            if (error) return response.status(200).json({status: false, message: error})
            return response.status(201).json({status: true, message: "Account created successfully"})
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message: "Internal server error"})        
    }
}

export const loginuser = (request,response) => {
    const { email, password} = request.body
    if (email === "" || password === "") {
        return response.status(200).json({status: false, message: "Please fill all required fields"})
    }
    try {
        const sqlQuerry = "SELECT * FROM users WHERE email = ?"
        conn.query(sqlQuerry,[email],(error,result) => {
            if (error) return response.status(200).json({status: false, message: error})
            if (result.length > 0) {
                const pass = comparepassword(password,result[0].password)
                if (pass) {
                    const name = result[0].lastName
                    const userID = result[0].user_id
                    const token = jwt.sign({name,userID},process.env.SECRET_USER,{expiresIn:'2d'})
                    response.cookie('token',token)
                    return response.status(200).json({status: true, message:"login successfully"})
                } else {
                    return response.status(200).json({status: false, message: "wrong email or password"})
                }
            } else {
                return response.status(200).json({status: false, message: "user not found"})
            }
        })
        
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message: "Internal server error"})
    }
}

export const userName = (request,response) => {
    return response.status(200).json({status: true, name: {name:request.name, userID: request.userID}})
}

export const logoutUser = (request,response) => {
    response.clearCookie('token')
    return response.status(200).json({status: true, message:"logout successfully"})
}

export const getvehicles = (request, response) => {
    const { page , limit } = request.query
    try {
        const offset = (page - 1) * limit
        const sqlQuerry = "SELECT * FROM vehicles WHERE vehicleCondition = 'Good' AND vehicleBooking = 'Free' LIMIT ? OFFSET ?"
        conn.query(sqlQuerry,[+limit,+offset],(error,result) => {
            if (error) return response.status(200).json({status: false, message: error})
            if (result.length > 0) {
                const totalVehicles = "SELECT count(*) as count FROM vehicles WHERE vehicleCondition = 'Good' AND vehicleBooking = 'Free'"
                conn.query(totalVehicles,(error,vehicles) => {
                    if (error) return response.status(200).json({status: false, message: error})
                    return response.status(200).json({status: true, result: {result: result, total: vehicles[0].count}})
                })
            } else {
                return response.status(200).json({status: true, message: "No available vehicle"})
            }
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message: "Internal server error"})
    }
}

export const getsingleVehicle = (request,response) => {
    const { id } = request.params
    try {
        const sqlQuerry = "SELECT * FROM vehicles WHERE vehicle_id = ?"
        conn.query(sqlQuerry,[id], (error, result) => {
            if (error) return response.status(200).json({status: false, message: error})
            if (result.length > 0) {
                return response.status(200).json({status: true, result: result})
            } else {
                return response.status(200).json({status: false, message:"Vehicle not found"})
            }
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message: "Internal server error"})
    }
}

export const bookCar = (request,response) => {
    const { days, userID } = request.body
    const { id } = request.params
   
    try {
        const sqlQuerry = "SELECT vehiclePrice FROM vehicles WHERE vehicle_id = ?"
        conn.query(sqlQuerry,[id],(error,result) => {
            if (error) return response.status(200).json({status: false, message: error})
            if (result.length) {
               const price = result[0].vehiclePrice
               const numberofDays = parseInt(days)
               const vehiclePrice = parseInt(price)
               const totalSum = (numberofDays * vehiclePrice)
               const querySQL = "INSERT INTO bookings(user_id,vehicle_id,bookingPrice,bookingDays) VALUES(?,?,?,?)"
               conn.query(querySQL,[userID,id,totalSum,days],(error, result) => {
                 if (error) return response.status(200).json({status: false, message: error})
                 return response.status(201).json({status: true, message: "Vehicle booked successfully"})
               })
            } else{
                return response.status(200).json({status: false, message: "Vehicle not found"})
            }
        })
        
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message: "Internal server error"})
    }
}

export const updateBookingstatus = (request,response) => {
    const { id } = request.params
    const sqlQuerry = "UPDATE vehicles SET vehicleBooking ='Booked' WHERE vehicle_id = ?"
    try {
        conn.query(sqlQuerry,[id],(error,result) => {
            if (error) return response.status(200).json({status: false, message: error})
            return response.status(200)
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message:"Internal server error"})
    }
}

export const bookingDetails = (request,response) => {
    const { id } = request.params
    try {
        const sqlQuerry = "SELECT lastName,vehicles.vehicle_id, email, vehicleName, bookingDate, bookingDays, bookingPrice, bookingState, bookingStatus FROM bookings INNER JOIN users ON users.user_id = bookings.user_id INNER JOIN vehicles ON vehicles.vehicle_id = bookings.vehicle_id WHERE bookings.user_id = ?"
        conn.query(sqlQuerry,[id],(error, result) => {
            if (error) return response.status(200).json({status: false, message: error})
            if (result.length > 0) {
                return response.status(200).json({status: true, result: result})
            } else {
                return response.status(200).json({status: false, message: "userID not found"})
            }
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message: "Internal server error"})
    }
}

export const returnVehicle = (request, response) => {
    const { id } = request.params
    try {
        const sqlQuerry = "UPDATE bookings SET bookingState = 'Checkpoint' WHERE vehicle_id = ?"
        conn.query(sqlQuerry,[id],(error,result) => {
            if (error) return response.status(200).json({status: false, message: error})
            return response.status(200).json({status: true, message: "returned successfully wait for admin approval"})
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({state: false, message: "Internal server error"})
    }
}

export const cancelBooking = (request, response) => {
    const { id } = request.params
    try {
        const sqlQuerry = "UPDATE bookings SET bookingStatus = 'Canceled' WHERE vehicle_id = ?"
        conn.query(sqlQuerry,[id],(error,result) => {
            if (error) return response.status(200).json({status: false, message: error})
            return response.status(200).json({status: true, message: "Booking canceled successfully"})
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({state: false, message: "Internal server error"})
    }
}