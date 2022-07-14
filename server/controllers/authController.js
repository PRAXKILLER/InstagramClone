import express from "express";

// Models
import { UserModel } from "../models";

// Validators
import { ValidateSignup, ValidateSignin } from '../Validators/authValidation'

const userSignup = (req, res) => {
    try {
        await ValidateSignup(req.body)
        await UserModel.findByEmailPhoneAndUserName(req.body);
        const newUser = await UserModel.create(req.body);
        const token = newUser.generateJwtToken();

        return res.status(200).json({ token: token, status: "Success" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const userSignin = (req, res) => {
    try {
        await ValidateSignin(req.body)
        const token = "";
        if (req.body.email) {
            const newUser = await UserModel.findByEmailAndPassword(req.body);
            const token = newUser.generateJwtToken();
        } else {
            const newUser = await UserModel.findByUserNameAndPassword(req.body);
            const token = newUser.generateJwtToken();
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