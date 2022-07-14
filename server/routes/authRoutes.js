import express from "express";

// Controller functions
import AuthController from '../controllers/authController'

const router = express.Router();

/**
 * Route    ->  /auth/signup
 * Method   ->  Post
 * Params   ->  none      
 */
router.post('/signup', AuthController.userSignup);

router.post('/signin', AuthController.userSignin);

export default router;