import express from "express";

import auth from "../middleware/auth.js";
import {
  createPost,
  deletePost,
  getPosts,
  likePost,
  updatePost,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/", getPosts);

router.post("/", auth, createPost);

router.patch("/:id", auth, updatePost);

router.delete("/:id", auth, deletePost);

router.patch("/:id/likepost", auth, likePost);

export default router;
