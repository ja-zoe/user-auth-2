import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true },
        roles: { type: Object, required: true, default: { User: 2001 } },
        password: { type: String, required: true }
    }
)

const usersCollection = mongoose.model('usersCollection', userSchema)

export default usersCollection