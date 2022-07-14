const { Schema, model } = require("mongoose");

const PostSchema = new Schema(
  {
    country: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { collection: "posts" }
);
const PostModel = model("Post", PostSchema);
module.exports = PostModel;
