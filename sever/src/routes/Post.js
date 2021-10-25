import express from "express";
import { getPosts } from "../controllers/postController";

const router = express.Router();

router.get("/", getPosts);

export default router;
