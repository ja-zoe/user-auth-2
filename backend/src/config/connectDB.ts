import mongoose from "mongoose";

const connectDB = async () => {
    try {
        if(process.env.MONGO_URI) { 
            mongoose.connect(process.env.MONGO_URI)
            console.log("Connected to MongoDB!")
        } else {
            throw new Error("Environment variable (MONGO_URI) is not defined")
        }
    } catch(error) {
        console.error(error)
        process.exit(1)
    }
}
export default connectDB
