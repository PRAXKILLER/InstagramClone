const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Insta = require("./models/index");

mongoose.connect("mongodb://localhost:27017/-----", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// jo bhi naam hai db ka vo ---- ki jagah replace kar dena

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.post("/post/add", async (req, res) => {
  const insta = new Insta(req.body.insta);
  await insta.save();
  res.redirect();
});

app.delete("/post/delete/:id", async (req, res) => {
  const { id } = req.params;
  await Insta.findByIdAndDelete(id);
  res.send("Post is deleted");
  res.redirect();
});

app.put("/user/update/:id", async (req, res) => {
  const { id } = req.params;
  const insta = await Insta.findByIdAndUpdate(id, {
    ...req.body.insta,
  });
  res.send("User Data is updated");
  res.redirect();
});
