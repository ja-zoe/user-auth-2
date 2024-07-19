import { Request, Response } from "express"
import jwt from 'jsonwebtoken'
import usersCollection from "../models/usersCollection"
import { createAccessToken } from "../utils/auth"

const refresh = (req: Request, res: Response) => {
    const cookies = req.cookies

    if (!cookies.jwt) return res.status(401).json({ message: 'Unauthorized' })

    const refreshToken = cookies.jwt
    console.log(refreshToken)
    if (process.env.REFRESH_TOKEN_SECRET) { 
        jwt.verify(
            refreshToken, 
            process.env.REFRESH_TOKEN_SECRET,
        async (err: any, decoded: any) => {
            if (err) return res.status(403).json({ message: "Forbidden" })
            
            const foundUser = await usersCollection.findOne({ username: decoded.username })

            if (!foundUser) return res.status(401).json({ message: "Unauthorized" })

            const accessToken = createAccessToken(decoded.username)

            return res.json({ accessToken })
        })   
    }
    else {
        console.error("REFRESH_TOKEN_SECRET not defined in environment variables")
        return res.status(500).json({ message: 'Error occured on our end' })
    }
}

const logout = (req: Request, res: Response) => {
    const cookies = req.cookies
    if(!cookies.jwt) return res.status(204)
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'none', secure: true })
    res.status(200).json({ message: "Cookie cleared" })
}

export {
    refresh,
    logout
}