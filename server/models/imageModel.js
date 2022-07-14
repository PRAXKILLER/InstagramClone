import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    location: { type: String, required: true }
});

export const ImageModel = mongoose.model("Image", imageSchema);