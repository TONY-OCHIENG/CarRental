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

export const getAllVehicles = (request, response) => {
    const { page , limit } = request.query
    try {
        const offset = (page - 1) * limit
        const sqlQuerry = "SELECT * FROM vehicles WHERE vehicleCondition = 'Good' LIMIT ? OFFSET ?  "
        conn.query(sqlQuerry,[+limit,+offset],(error,result) => {
            if (error) return response.status(200).json({status: false, message:error})    
            if (result.length > 0) {
                const totalVehicles = "SELECT count(*) as count FROM vehicles WHERE vehicleCondition = 'Good'"
                conn.query(totalVehicles,(error,vehicles) => {
                    if (error) return response.status(200).json({status: false, message: error})
                    return response.status(200).json({status: true, result: {result: result, total: vehicles[0].count}})
                })
            }
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({status:false, message:"Internal server error"})
    }
}

export const getsingleVehicle = (request,response) => {
    const { id } = request.params
    try {
        const sqlQuerry = "SELECT * FROM vehicles WHERE vehicle_id = ?"
        conn.query(sqlQuerry,[id],(error,result) => {
            if (error) return response.status(200).json({status: false, message:error})
            if (result.length > 0) {
                return response.status(200).json({status:true, result: result})
            } else {
                return response.status(404).json({status: false, message: "vehicle not found"})
            }
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message:"Internal server error"})
    }
}

export const editVehicle = (request,response) => {
    const { id } = request.params
    const {vehiclePrice, vehicleName, vehicleCapacity, vehicleType } = request.body
    try {
        const sqlQuerry = "UPDATE vehicles SET vehiclePrice=?, vehicleName=?, vehicleCapacity=?, vehicleType =? WHERE vehicle_id = ?"
        conn.query(sqlQuerry,[vehiclePrice, vehicleName, vehicleCapacity, vehicleType, id], (error,result) => {
            if (error) return response.status(200).json({status:false, message:error})
            return response.status(200).json({status: true, message: "vehicle updated successfully"})
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message: "Internal server error"})
    }
}

export const deleteVehicle = (request,response) => {
    const { id } = request.params
    try {
        const sqlQuerry = "DELETE FROM vehicles WHERE vehicle_id = ?"
        conn.query(sqlQuerry,[id], (error,result) => {
            if (error) return response.status(200).json({status: false, message: error})
            return response.status(200).json({status: true, message:"Vehicle deleted successfully"})
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({status:false, message:"Internal server error"})
    }
}

export const repairVehicles = (request,response) => {
    const { id } = request.params
    try {
        const sqlQuerry = "UPDATE vehicles SET vehicleCondition = 'Bad' WHERE vehicle_id = ?"
        conn.query(sqlQuerry,[id],(error,result) => {
            if (error) return response.status(200).json({status: false, message: error})
            return response.status(200).json({status:true, message:"Vehicle scheduled for maintenance"})
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message:"Internal server error"})
    }
}

export const getAllRepairs = (request, response) => {
    try {
        const sqlQuerry = "SELECT * FROM vehicles WHERE vehicleCondition = 'Bad'"
        conn.query(sqlQuerry,(error,result) => {
            if (error) return response.status(200).json({status: false, message: error})
            return response.status(200).json({status: true, result: result})
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message:"Internal server error"})
    }
}

export const maintenance = (request, response) => {
    const { id } = request.params
      try {
        const sqlQuerry = "UPDATE vehicles SET vehicleCondition = 'Good' WHERE vehicle_id = ?"
        conn.query(sqlQuerry,[id],(error,result) => {
            if (error) return response.status(200).json({status: false, message: error})
            return response.status(200).json({status:true, message:"Vehicle repaired successfully"})
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message:"Internal server error"})
    }
}

export const getBookings = (request, response) => {
    try {
        const sqlQuerry = "SELECT lastName, email, vehicleName, bookingDate, bookingDays, bookingPrice, bookingState, bookingStatus,vehicles.vehicle_id FROM bookings INNER JOIN users ON users.user_id = bookings.user_id INNER JOIN vehicles ON vehicles.vehicle_id = bookings.vehicle_id "
        conn.query(sqlQuerry,(error,result) => {
            if (error) return response.status(200).json({status: false, message: error})
            if (result.length > 0) {
                return response.status(200).json({status: true, result: result})
            }
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message: "Internal server error"})
    }
}

export const approveBookings = (request,response) => {
    const { id } = request.params
    try {
        const sqlQuerry = "UPDATE bookings SET bookingStatus = 'Approved' WHERE vehicle_id = ?"
        conn.query(sqlQuerry,[id], (error,result) => {
            if (error) return response.status(200).json({status: false, message: error})
            if (result) {
                const querySQL = "UPDATE bookings SET bookingState = 'Ongoing' WHERE vehicle_id = ?"
                conn.query(querySQL,[id],(errors,results) => {
                    if (error) return response.status(200).json({status: false, message: error})
                    return response.status(200).json({status: true, message: "Booking approved successfully"})
                })
            }
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message: "Internal server error"})
    }
}

export const returnbookedvehicle = (request,response) => {
    const { id } = request.params
    try {
        const sqlQuerry = "UPDATE bookings SET bookingState = 'Returned' WHERE vehicle_id = ?"
        conn.query(sqlQuerry,[id],(error,result) => {
            if (error) return response.status(200).json({status: false, message: error})
            if (result) {
                const querySQL = "UPDATE vehicles SET vehicleBooking = 'Free' WHERE vehicle_id = ?"
                conn.query(querySQL,[id],(errors,results) => {
                    if (errors) return response.status(200).json({status: false, message: errors})
                    return response.status(200).json({status: true, message: "Vehicle returned successfully"})
                })
            }
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message: "Internal server error"})
    }
}

export const cancelBooking = (request,response) => {
    const { id } = request.params
    try {
        const sqlQuerry = "UPDATE bookings SET bookingStatus = 'Canceled' WHERE vehicle_id = ?"
        conn.query(sqlQuerry,[id],(error,result) => {
            if (error) return response.status(200).json({status: false, message: error})
            return response.status(200).json({status : true, message: "Booking canceled successfully"})
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message: "Internal server error"})
    } 
}

export const availableVehicles = (request, response) => {
    try {
        const sqlQuerry = "SELECT count(*) as count FROM vehicles WHERE vehicleCondition = 'Good' AND  vehicleBooking = 'Free'"
        conn.query(sqlQuerry,(error,result) => {
            if (error) return response.status(200).json({status: false, message: error})
            return response.status(200).json({status: true, result: result[0].count})
        })
        
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message: "Internal server error"})
    }
}

export const rentedVehicles = (request,response) => {
    try {
        const sqlQuerry = "SELECT count(*) as count FROM bookings WHERE bookingStatus = 'Approved' AND bookingState = 'Ongoing'"
        conn.query(sqlQuerry,(error,result) => {
            if (error) return response.status(200).json({status: false, message: error})
            return response.status(200).json({status: true, result: result[0].count})
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message: "Internal server error"})
    }
}

export const checkpointVehicles = (request,response) => {
    try {
        const sqlQuerry = "SELECT count(*) as count FROM bookings WHERE bookingStatus = 'Approved' AND bookingState = 'Checkpoint'"
        conn.query(sqlQuerry,(error,result) => {
            if (error) return response.status(200).json({status: false, message: error})
            return response.status(200).json({status: true, result: result[0].count})
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message: "Internal server error"})
    }
}

export const overduevehicles = (request, response) => {
    try {
        const sqlQuerry = "SELECT count(*) as count FROM bookings WHERE bookingStatus = 'Approved' AND bookingState = 'Overdue'"
        conn.query(sqlQuerry,(error,result) => {
            if (error) return response.status(200).json({status: false, message: error})
            return response.status(200).json({status: true, result: result[0].count})
        })        
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message: "Internal server error"})
    }
}

export const countMaintenance = (request, response) => {
    try {
        const sqlQuerry = "SELECT count(*) as count FROM vehicles WHERE vehicleCondition = 'Bad'"
        conn.query(sqlQuerry,(error,result) => {
            if (error) return response.status(200).json({status: false, message: error})
            return response.status(200).json({status: true, result: result[0].count})
        })  
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message: "Internal server error"})
    }
}

export const totalEarnings = (request, response) => {
    try {
        const sqlQuerry = "SELECT SUM(bookingPrice) as totalPrice FROM bookings WHERE bookingStatus = 'Approved' AND bookingState = 'Ongoing' OR 'Overdue'"
        conn.query(sqlQuerry,(error,result) => {
            if (error) return response.status(200).json({status: false, message: error})
            return response.status(200).json({status: true, result: result[0].totalPrice})
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message: "Internal server error"})
    }
}

export const vehicleTypes = (request,response) => {
    try {
        const sqlQuerry = "SELECT vehicles.vehicleType,SUM(bookings.bookingPrice) AS totalPrice FROM bookings INNER JOIN vehicles ON vehicles.vehicle_id = bookings.vehicle_id WHERE bookings.bookingStatus = 'Approved' AND (bookings.bookingState = 'Ongoing' OR bookings.bookingState = 'Overdue') GROUP BY vehicles.vehicleType"
        conn.query(sqlQuerry,(error,result) => {
            if (error) return response.status(200).json({status: false, message: error})
            return response.status(200).json({status: true, result: result})
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message: "Internal server error"})
    }
}