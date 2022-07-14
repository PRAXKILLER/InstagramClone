import express from "express";

// Controllers
import postController from "../controllers/postController";

const router = express.Router();

router.post("/add", postController.addNewPost);

router.delete("/delete/:id", postController.deletePost);