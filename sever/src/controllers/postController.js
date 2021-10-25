import PostMessage from "../models/Post";

export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();

    res.status(200).json(postMessage);
  } catch (error) {
    return res.status(409).json({ message: error });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    res.status(201).json(newPost);
  } catch (error) {
    return res.status(409).json({ message: error });
  }
};
