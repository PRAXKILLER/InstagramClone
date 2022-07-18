import express from "express";

// Models
import { PostsModel, UserModel } from "../models";

import { shuffleArray } from "../helpers/arrayHelpers";


const addNewPost = async(req, res) => {
    try {
        const userId = req.session.passport.user._doc._id;
        const postDetails = req.body;
        postDetails.likes = [];
        postDetails.comments = [];
        postDetails.isDeleted = false;

        const post = await PostsModel.create(postDetails);
        await UserModel.findByIdAndUpdate(userId, {
            $push: {
                posts: post._id
            }
        })

        return res.status(200).json({ status: "Success", postDetails: post });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const deletePost = async(req, res) => {
    try {
        const { id } = req.params;
        await PostsModel.findByIdAndUpdate(id, {
            isDeleted: true,
        });
        return res.status(200).json({ status: "Post Deleted Successfully" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getPost = async(req, res) => {
    try {
        const { id } = req.params;
        const post = await PostsModel.findById(id);

        return res.status(200).json({ post });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getFollowingPosts = async(req, res) => {
    try {
        const userId = req.session.passport.user._doc._id;
        const { following } = await UserModel.findById(userId, "following").populate("following");

        const followingPosts = [];
        for (let i = 0; i < following.length; i++) {
            const user = following[i];

            const { posts } = await user.populate("posts");
            followingPosts.push(...posts);
        }
        shuffleArray(followingPosts);
        return res.json({ followingPosts });
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
    getPost,
    getFollowingPosts,
    likeAPost
};