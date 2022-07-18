import express from "express";

// Models
import { CommentsModel, PostsModel } from "../models";

const addAComment = async(req, res) => {
    try {
        const { postId } = req.params;
        const userId = req.session.passport.user._doc._id;

        const comment = await CommentsModel.create({ user: userId, ...req.body });
        if (!comment.isReply) {
            await PostsModel.findByIdAndUpdate(postId, {
                $push: {
                    comments: comment._id
                }
            })
        }

        return res.status(200).json({ comment });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const getACommentById = async(req, res) => {
    try {
        const { id } = req.params;
        const comment = await CommentsModel.findById(id);

        return res.status(200).json({ comment });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export default {
    addAComment,
    getACommentById
}