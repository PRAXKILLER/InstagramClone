import express from "express";
import passport from "passport";

// Controllers
import PostController from "../controllers/postController";

const router = express.Router();

router.get("/following", passport.authenticate("jwt"), PostController.getFollowingPosts);

router.get("/get/:id", PostController.getPost);

router.post("/add", passport.authenticate("jwt"), PostController.addNewPost);

router.delete("/delete/:id", PostController.deletePost);
router.post("/like/:id", passport.authenticate("jwt"), PostController.likeAPost);

export default router;