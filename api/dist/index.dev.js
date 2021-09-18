"use strict";

var express = require("express");

var app = express();

var dotenv = require("dotenv");

var mongoose = require("mongoose");

var authRoute = require("./routes/auth");

var userRoute = require("./routes/users");

var postRoute = require("./routes/posts");

var cateRoute = require("./routes/categories");

var multer = require('multer');

var path = require('path');

dotenv.config(); //middleware

app.use(express.json());
app.use("/images", express["static"](path.join(__dirname, "/images"))); //connect mongoose

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log("Database connected!");
})["catch"](function (err) {
  return console.log(err);
}); //Upload img

var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, "images");
  },
  filename: function filename(req, file, cb) {
    cb(null, req.body.name);
  }
});
var upload = multer({
  storage: storage
});
app.post("/api/upload", upload.single("file"), function (req, res) {
  res.status(200).json("File has been uploaded");
}); //route

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", cateRoute); // app.use("/", (req,res) => {
//     res.send("Hello world")
// })

app.listen("5000", function () {
  console.log("Backend is running");
});