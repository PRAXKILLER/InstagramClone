import express from "express";

import { s3Upload } from "../utils/s3Upload";

// Models
import { ImageModel } from "../models";

const uploadImage = async(req, res) => {
    try {
        const file = req.file;

        // s3 bucket options
        const bucketOptions = {
            Bucket: "instagram999",
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read", // Access Control List
        }

        const uploadImage = await s3Upload(bucketOptions);

        const saveImagetoDB = await ImageModel.create({
            location: uploadImage.Location
        })

        return res.status(200).json({ image: saveImagetoDB });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAParticularImage = async(req, res) => {
    try {
        const { id } = req.params;
        const image = await ImageModel.findById(id);
        return res.status(200).json({ image });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export default {
    uploadImage,
    getAParticularImage
}
