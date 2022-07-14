import express from "express";

// Routes
import UserRoutes from './userRoutes'
import PostRoutes from './postRoutes'

const router = express.Router();

router.use('/user', UserRoutes);
router.use('/post', PostRoutes);

export default router;