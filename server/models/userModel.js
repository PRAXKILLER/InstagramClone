import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    description: { type: String },
    userName: {
        unique: true,
        type: String
    },
    posts: [{
        type: mongoose.Types.ObjectId,
        ref: "Posts"
    }],
    followers: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
    following: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
    phoneNumber: { type: Number },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
    },
    profilePic: {
        type: mongoose.Types.ObjectId,
        ref: "Image"
    },
    messages: {
        type: mongoose.Types.ObjectId,
        ref: "Chats"
    }
});

export const UserModel = mongoose.model("User", userSchema);