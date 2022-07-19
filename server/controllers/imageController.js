import express from "express";

//Model
import { ImageModel } from "../models";

const getImagedata = async(req, res) => {
    try {
        const { id } = req.params;
        const image = await ImageModel.findById(id);

        return res.status(200).json({ image });
    } 
    catch (error) 
    {
        return res.status(500).json({ error: error.message })
    }
}

export default{ getImagedata };