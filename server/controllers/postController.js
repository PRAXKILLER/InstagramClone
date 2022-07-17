import express from "express";

// Models
import { PostsModel } from "../models";

const addNewPost = async(req, res) => {
    try {
        const postDetails = req.body;
        postDetails.likes = [];
        postDetails.comments = [];
        postDetails.isDeleted = false;

        const post = await PostsModel.create(postDetails);

        return res.status(200).json({ status: "Success", postDetails: post });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const deletePost = async(req, res) => {
    try {
        const { id } = req.params;
        await PostsModel.findByIdAndUpdate(id, {
            isDeleted: true
        });
        return res.status(200).json({ status: "Post Deleted Successfully" })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const likeAPost = async(req, res) => {
    try {
        const { id } = req.params;
        const userId = req.session.passport.user._doc._id;

        const post = await PostsModel.findByIdAndUpdate(id, {
            $push: {
                likes: userId
            }
        }, {
            new: true
        })

        return res.status(200).json({ post });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export default {
    addNewPost,
    deletePost,
    likeAPost
}