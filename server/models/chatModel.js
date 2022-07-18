import mongoose from "mongoose";

const chatSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    messages: [{
        message: String,
        isSent: Boolean,
        time: String
    }]
});

export const ChatModel = mongoose.model("Chat", chatSchema);