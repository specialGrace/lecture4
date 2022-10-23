import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "User",
    },
    title: { type: String, required: [true, "title is required"] },
    body: { type: String, required: [true, "password is required"] },
    image: { type: String, required: [true, "image is required"] },
    imageId: { type: String, required: [true, "image is required"] },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
