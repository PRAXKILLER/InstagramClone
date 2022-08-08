import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: "User" },
    image: { type: mongoose.Types.ObjectId, ref: "Image" },
    likes: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    comments: [{ type: mongoose.Types.ObjectId, ref: "Comments" }],
    isDeleted: Boolean,
    description: String,
  },
  {
    timestamps: true,
  }
);

export const PostsModel = mongoose.model("Posts", PostSchema);

// https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/
