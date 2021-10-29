import express from "express";
import { createPost, getPosts } from "../controllers/postController.js";

const router = express.Router();

router.get("/", getPosts);

router.post("/", createPost);

export default router;
