import express from "express";
import passport from "passport";

// Controllers
import userController from "../controllers/userController";

const router = express.Router();

router.get("/post/getUserPosts", (req, res) => {
  res.render();
});
router.put("/update", passport.authenticate("jwt"), userController.updateUser);
router.delete(
  "/delete",
  passport.authenticate("jwt"),
  userController.deleteUser
);

export default router;
