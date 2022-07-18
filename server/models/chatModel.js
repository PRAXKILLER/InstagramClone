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

const chatModel = mongoose.model("Chat", chatSchema);