import express from "express";

// Routes
import AuthRoutes from './authRoutes'
import UserRoutes from './userRoutes'
import PostRoutes from './postRoutes'

const router = express.Router();

router.use('/auth', AuthRoutes);
router.use('/user', UserRoutes);
router.use('/post', PostRoutes);

export default router;