import express from "express";

// Models
import { PostsModel } from "../models";

//import { shuffleArray } from "../helpers/arrayHelpers";

const getPostdata = async(req, res) =>{
    try 
    {
        const { id } = req.params;
        const post = await PostsModel.findById(id);
        
        return res.status(200).json({ post });
    } 
    catch (error) 
    {
        return res.status(500).json({ error: error.message });
    }
}

export default { getPostdata };