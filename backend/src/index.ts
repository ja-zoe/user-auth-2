require('dotenv').config()
import express from "express";
import connectDB from "./config/connectDB";
import userRouter from "./routes/userRoutes";
import authRouter from "./routes/authRoutes"
import cors from "cors"
import cookieParser from 'cookie-parser'

const app = express()

// Connect to MongoDB
connectDB()

app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use('/user', userRouter)
app.use('/auth', authRouter)

app.listen(process.env.PORT||3001, () => {
    console.log(`Server running on port ${process.env.PORT || 3001}`)
})