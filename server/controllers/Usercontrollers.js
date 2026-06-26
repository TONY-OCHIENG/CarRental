import conn from "../configs/db.js"
import { hashPassword } from "../configs/passwordHash.js"

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