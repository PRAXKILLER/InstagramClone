import express from "express";

// Models
import { UserModel } from "../models";

const getUserdata = async(req, res) => {
    try 
    {
        const { id } = req.params;
        const user = await UserModel.findById(id);
        const { name } = user;

         if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json({ user : name });
    } catch (error)
    {
        return res.status(500).json({ error: error.message });
    }
}

export default { getUserdata };