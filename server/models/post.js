const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  image: { data: Buffer, contentType: String },
  likes: [{ user_id: user_id }],
  comments: [{ body: String, date: Date }],
  isDeleted: Boolean,
  description: String,
});

module.exports = mongoose.model("Post", PostSchema);

// https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/
