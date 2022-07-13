import mongoose from "mongoose";

const CommentsSchema = new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref: "User" },
    repliedTo: { type: mongoose.Types.ObjectId, ref: "Comments" },
    commentUnder: { type: mongoose.Types.ObjectId, ref: "Comments" },
    isReply: { type: Boolean },
}, {
    timestamps: true,
});

export const CommentsModel = mongoose.model("Comments", CommentsSchema);