import express from "express";
import { registerUser, loginUser,logoutUser } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js"; 
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected logout route
router.post("/logout", logoutUser);
export default router;
