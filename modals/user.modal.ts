import {Schema, model, models} from "mongoose";

const UserSchema = new Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    idNumber: {
        type: String, 
    },
    kyc_status: {
        type: Boolean
    },
})

const User = models?.User || model("User", UserSchema)

export default User