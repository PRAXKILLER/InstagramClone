import express from "express";
import passport from "passport";

// Controllers
import PostController from "../controllers/postController";

const router = express.Router();

router.get("/:id",PostController.getPostdata);

export default router;