import express from "express";
import passport from "passport";

// Controllers
import userController from "../controllers/userController";

const router = express.Router();

/*
router.get('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const user = await userController.findById(id);
        const { name } = user;

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json({ user : name });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})
*/

router.get('/:id', userController.getUserdata);

export default router;