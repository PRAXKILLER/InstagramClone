import express from "express";
import AWS from 'aws-sdk'
import multer from "multer";

// Controller
import ImageController from '../controllers/ImageController';

const router = express.Router();

// multer config
const storage = multer.memoryStorage();
const upload = multer({ storage })

router.get('/:id', ImageController.getImagedata);

export default router;