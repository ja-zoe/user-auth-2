import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import usersCollection from "../models/usersCollection"
import { Request, Response } from "express"

// Register User 
const registerUser = async (req: Request, res: Response) => {
    try {
        console.log("User attempting to register")
        const { username, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = new usersCollection({ username, email, password: hashedPassword })
        await newUser.save()
        res.status(200).json({message: "User created successfully"})
        console.log("User created successfully")
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Error creating user"})
    }
}

// Login user and give token
const loginUser = async (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        
    }
}

// Update user information
const updateUser = async (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        
    }
}

// Delete user
const deleteUser = async (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        
    }
}

export default { registerUser, loginUser, updateUser, deleteUser }