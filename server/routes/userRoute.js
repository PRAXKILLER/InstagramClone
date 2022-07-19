import express from "express";
import passport from "passport";

// Controllers
import userController from "../controllers/userController";

const router = express.Router();

router.get('/:id', userController.getUserdata);

export default router;