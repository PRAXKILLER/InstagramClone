import express from "express";
import passport from "passport";

// Controllers
import postController from "../controllers/postController";

const router = express.Router();

router.post("/add", postController.addNewPost);
router.delete("/delete/:id", postController.deletePost);
router.post("/like/:id", passport.authenticate("jwt"), postController.likeAPost);

export default router;