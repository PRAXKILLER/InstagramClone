import express from "express";

// Models
import { UserModel } from "../models";

// Validators
import { ValidateSignup, ValidateSignin } from '../Validators/authValidation'

const userSignup = async(req, res) => {
    try {
        await ValidateSignup(req.body)
        await UserModel.findByEmailAndUserName(req.body);
        const newUser = await UserModel.create(req.body);
        const token = newUser.generateJwtToken();

        return res.status(200).json({ token: token, status: "Success" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const userSignin = async(req, res) => {
    try {
        await ValidateSignin(req.body)
        let token = "";
        if (req.body.email) {
            const newUser = await UserModel.findByEmailAndPassword(req.body);
            token = newUser.generateJwtToken();
        } else {
            const newUser = await UserModel.findByUserNameAndPassword(req.body);
            token = newUser.generateJwtToken();
        }

        return res.status(200).json({ token: token, status: "Success" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export default {
    userSignup,
    userSignin
}