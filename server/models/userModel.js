import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
    name: { type: String }, // signup
    email: { type: String },
    password: { type: String },
    description: { type: String },
    userName: {
        unique: true,
        type: String
    },
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
}, {
    timestamps: true,
});

userSchema.methods.generateJwtToken = function() {
    return jwt.sign({ user: this._id.toString() }, "InstagramApp")
}

userSchema.statics.findByEmailAndUserName = async({ userName, email, phoneNumber }) => {
    const checkUserByEmail = await UserModel.findOne({ email });
    const checkUserByUserName = await UserModel.findOne({ userName });

    if (checkUserByEmail)
        throw new Error("User with this email already exists");

    if (checkUserByUserName)
        throw new Error("User with this username already exists");

    return false;
}

userSchema.statics.findByEmailAndPassword = async({ email, password }) => {
    const user = await UserModel.findOne({ email });
    if (!user)
        throw new Error("User does not exists");

    // Compare password
    const doesPasswordMatch = await bcrypt.compare(password, user.password);

    if (!doesPasswordMatch)
        throw new Error("Invalid Password !!!");

    return user;
}

userSchema.statics.findByUserNameAndPassword = async({ userName, password }) => {
    const user = await UserModel.findOne({ userName });
    if (!user)
        throw new Error("User does not exists");

    // Compare password
    const doesPasswordMatch = await bcrypt.compare(password, user.password);

    if (!doesPasswordMatch)
        throw new Error("Invalid Password !!!");

    return user;
}

userSchema.pre("save", function(next) {
    const user = this;

    if (!user.isModified("password"))
        return next();

    // Generate bcrypt salt
    bcrypt.genSalt(8, (error, salt) => {
        if (error)
            return next(error);

        // Hash the password
        bcrypt.hash(user.password, salt, (error, hash) => {
            if (error)
                return next(error);

            // Assign hashed password
            user.password = hash
            return next();
        })
    })
})

export const UserModel = mongoose.model("User", userSchema);