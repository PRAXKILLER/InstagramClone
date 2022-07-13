import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    image: { type: mongoose.Types.ObjectId, ref: "Image" },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
    comments: [{ type: mongoose.Types.ObjectId, ref: "Comments" }],
    isDeleted: Boolean,
    description: String,
});

export const PostsModel = mongoose.model("Posts", PostSchema);

// https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/