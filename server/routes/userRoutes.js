import express from "express";
import passport from "passport";

// Controllers
import userController from "../controllers/userController";

const router = express.Router();

router.get('/', passport.authenticate("jwt"), userController.getAuthorizedUser);
router.get('/get/:id', userController.getAParticularUser);
router.put("/update", passport.authenticate("jwt"), userController.updateUser);
router.delete('/delete', passport.authenticate("jwt"), userController.deleteUser);
router.get('/search', userController.searchUsers);
router.post('/follow/:id', passport.authenticate("jwt"), userController.follow);

export default router;