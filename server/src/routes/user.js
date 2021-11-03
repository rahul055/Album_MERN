import express from "express";
import { signinUser, signupUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/signin", signinUser);
router.post("/signup", signupUser);

export default router;
