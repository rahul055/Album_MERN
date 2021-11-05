import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  title: String,
  creator: String,
  selectedFile: String,
  message: String,
  tags: [String],
  likeCount: {
    type: Number,
    default: 0,
  },
  imageID: { type: String, require: true },
  createdAt: {
    type: Date,
    default: new Date().toISOString(),
  },
});

const PostMessage = mongoose.model("PostMessage", PostSchema);

export default PostMessage;
