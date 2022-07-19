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

const searchUsers = async(req, res) => {
    try {
        const { searchString } = req.body;
        const users = await UserModel.find({
            $or: [{ userName: { $regex: searchString, $options: "i" } }, { name: { $regex: searchString, $options: "i" } }]
        })

        if (users.length == 0)
            return res.status(404).json({ error: "No User Found" });

        return res.status(200).json({ users });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const follow = async(req, res) => {
    try {
        const { id } = req.params;
        const userId = req.session.passport.user._doc._id;

        await UserModel.findByIdAndUpdate(id, {
            $push: {
                followers: userId
            }
        })

        const followerData = await UserModel.findByIdAndUpdate(userId, {
            $push: {
                following: id
            }
        }, { new: true })

        return res.status(200).json({ followerData });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const getUserdata = async(req, res) => {
    try 
    {
        const { id } = req.params;
        const user = await UserModel.findById(id);
        const { name } = user;

         if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ user : name });
    } catch (error)
    {
        return res.status(500).json({ error: error.message });
    }
}

export default {
    updateUser,
    deleteUser,
    searchUsers,
    follow,
    getUserdata
}
