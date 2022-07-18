import mongoose from "mongoose";
const chatSchema=mongoose.Schema(
    {
        user: { 
            type: mongoose.Types.ObjectId,
            ref: "User" 
        },
        messages:[
            {
                message : String,
                type:  String,
                time: Date
            }
        ]
    }
);
const chatModel=mongoose.model("Chat",chatSchema);