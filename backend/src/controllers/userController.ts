import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import usersCollection from "../models/usersCollection"
import { Request, Response } from "express"
import { createAccessToken, createRefreshToken } from "../utils/auth"
import Roles from "../config/roles"

// Register User and give token
const registerUser = async (req: Request, res: Response) => {
    try {
        console.log("User attempting to register")
        const { username, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = new usersCollection({ username, email, password: hashedPassword })
        let { roles } = await newUser.save()
        roles = Object.values(roles)
        const token = createAccessToken(username)
        res.status(200).json({ message: "User created successfully", username, token, roles })
        console.log("User created successfully")
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Error creating user" })
    }
}

// Login user and give token
const loginUser = async (req: Request, res: Response) => {
    try {
        const {username, password} = req.body
        const user = await usersCollection.findOne({username})
        if(!user) {
            return res.status(404).json({message: 'Invalid credentials'})
        }
        let { email, roles } = user
        roles = Object.values(roles)
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid){
            return res.status(404).json({message: 'Invalid credentials'})
        }
        const accessToken = createAccessToken(user.username)
        res.status(200).json({ message: "User signed in successfully", username, email, roles, accessToken })
        console.log("User logged in")
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Error logging in" })
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

const registerAdmin = async (req: Request, res: Response) => {
    try {
        console.log("User attempting to register")
        let { username, email, password } = req.body
        let roles = Roles
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = new usersCollection({ username, email, roles, password: hashedPassword })
        await newUser.save()
        const token = createAccessToken(username)
        const rolesValues = Object.values(roles)
        res.status(200).json({ message: "User created successfully", username, token, rolesValues })
        console.log("User created successfully")
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Error creating user" })
    }
}

export default { registerUser, loginUser, updateUser, deleteUser, registerAdmin }