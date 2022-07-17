import express from "express";

// Routes
import AuthRoutes from './authRoutes'
import UserRoutes from './userRoutes'
import PostRoutes from './postRoutes'
import ImageRoutes from './imageRoutes'

const router = express.Router();

router.use('/auth', AuthRoutes);
router.use('/user', UserRoutes);
router.use('/post', PostRoutes);
router.use('/image', ImageRoutes);

export default router;