import express from 'express'

// Controllers
import userController from '../controllers/userController';


const router = express.Router();

router.put("/user/update/:id", userController.updateUser);

export default router;