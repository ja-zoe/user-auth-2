import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {type: String, required: true, unique: true},
        email: {type: String, required: true},
        password: {type: String, required: true}
    }
)

const usersCollection = mongoose.model('usersCollection', userSchema)

export default usersCollection