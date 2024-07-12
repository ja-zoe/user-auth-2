require('dotenv').config()
import express from "express";
import connectDB from "./config/connectDB";
import userRouter from "./routes/userRoutes";

const app = express()

// Connect to MongoDB
connectDB()

app.use(express.json())

app.use('/user', userRouter)

app.listen(process.env.PORT||3001, () => {
    console.log(`Server running on port ${process.env.PORT || 3001}`)
})