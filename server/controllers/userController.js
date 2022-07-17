import express from "express";

// Models
import { UserModel } from "../models";

const updateUser = async(req, res) => {
    try {
        const id = req.session.passport.user._doc._id;
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

        return res.status(200).json({ status: "User Data is updated", userData: user });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const deleteUser = async(req, res) => {
    try {
        const id = req.session.passport.user._doc._id;
        await UserModel.findByIdAndDelete(id);

        return res.status(200).json({ status: "User successfully deleted" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export default {
    updateUser,
    deleteUser
}