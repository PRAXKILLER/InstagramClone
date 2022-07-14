import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    image: { 
        type: mongoose.Types.ObjectId,
        ref:"Image"
    },
});

export const ImageModel = mongoose.model("Image", imageSchema);