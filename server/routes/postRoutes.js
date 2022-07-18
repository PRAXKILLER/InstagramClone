import express from "express";

// Controllers
import postController from "../controllers/postController";

const router = express.Router();

router.get("/post/following", (req, res) => {
  res.render();
});

router.get("/post/get/:id", postController.getPost);

router.post("/add", postController.addNewPost);

router.delete("/delete/:id", postController.deletePost);

export default router;
