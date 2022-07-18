import express from "express";
import passport from "passport";

// Controller
import CommentController from '../controllers/CommentController';

const router = express.Router();

router.post('/add/:postId', passport.authenticate("jwt"), CommentController.addAComment);
router.get('/get/:id', CommentController.getACommentById);

export default router;