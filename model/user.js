import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    password: {
        type: String
    }
})

export default mongoose.model("htUsers", userSchema)