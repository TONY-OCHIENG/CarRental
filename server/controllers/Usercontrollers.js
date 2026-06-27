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
                    const token = jwt.sign({name},process.env.SECRET_USER,{expiresIn:'2d'})
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