import conn from "../configs/db.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
export const loginAdmin = (request, response) => {
    const { email, password} = request.body
    if (email === "" || password === "") {
        return response.status(200).json({status: false, message: "Please fill all required fields"})
    }
    try {
        const sqlQuerry = "SELECT * FROM users WHERE email = ? AND password = ?"
        conn.query(sqlQuerry,[email,password], (error,result) => {
            if (error) return response.status(200).json({status: false, message: error})
            if (result.length > 0) {
                const role = result[0].role
                const token = jwt.sign({role},process.env.SECRET,{expiresIn:'2d'})
                response.cookie('token',token)
                return response.status(200).json({status:true, message:"login successfully"})
            } else {
                return response.status(401).json({status: false, message: "wrong email or password"})
            }
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({status: false, message:"Internal server error"})
    }
}