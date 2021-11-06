import PostMessage from "../models/Post.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();
    const reversedArray = postMessage.reverse();
    res.status(200).json(reversedArray);
  } catch (error) {
    return res.status(409).json({ message: error });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage({
    ...post,
    createdAt: new Date().toISOString(),
    user: req.userId,
  });
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    return res.status(409).json({ message: error });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json("no post available with that id");

  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );

  res.status(200).json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json("no post available with that id");
  await PostMessage.findByIdAndRemove(id);
  res.status(200).json("post has been deleted.");
};

export const likePost = async (req, res) => {
  const { id } = req.params;
  if (!req.userId) return res.json({ message: "Unauthenticated." });
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json("no post available with this id");

  const post = await PostMessage.findById(id);

  const index = post.likeCount.findIndex((id) => id === String(req.userId));
  if (index === -1) {
    post.likeCount.push(req.userId);
  } else {
    post.likeCount = post.likeCount.filter((id) => id !== String(req.userId));
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
    new: true,
  });
  res.json(updatedPost);
};
