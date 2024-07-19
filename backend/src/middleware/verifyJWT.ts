import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import usersCollection from "../models/usersCollection";

const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
    const authHeader: any = req.headers.authorization || req.headers.Authorization
    
    if (!authHeader?.startsWith('Bearer ')) {
        res.status(401).json({ message: "Unauthorized" })
    }

    const accessToken = authHeader.split(' ')[1]
    
    if (process.env.ACCESS_TOKEN_SECRET) {
        jwt.verify(
            accessToken,
            process.env.ACCESS_TOKEN_SECRET,
            async (err: any, decoded: any) => {
                if (err) return res.status(403).json({ message: "Forbidden" })
                
                const user = await usersCollection.findOne({ username: decoded.username })

                if (!user) return res.status(401).json({ message: "Unauthorized" })
                req.user = user.username
                req.roles = Object.keys(user.roles)
                next()
            }
        )
    } else {
        console.error("ACCESS_TOKEN_SECRET not defined in environment variables")
        return res.status(500).json({ message: 'Error occured on our end' })
    }
}

export { verifyJWT }