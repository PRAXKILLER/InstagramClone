import express from "express";

// Routes
import AuthRoutes from './authRoutes'

const router = express.Router();

router.use('/auth', AuthRoutes);

export default router;