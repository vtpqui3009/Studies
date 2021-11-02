const express = require("express");
const bodyParser = require("body-parser");

const HttpError = require("./models/http-error");
const PostRoute = require("./routes/PostRoute");
const CategoryPostRoute = require("./routes/CategoryPostRoute");
const AuthRoute = require("./routes/UserRoute");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const server = express();
const mongoose = require("mongoose");
const { ServerApiVersion } = require("mongodb");

server.use(bodyParser.json());
server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});
server.use("/uploads/images", express.static(path.join("uploads", "images")));
server.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});
// server.use("/images", express.static(path.join(__dirname, "/images")));
// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "images");
//   },
//   filename: (req, file, callback) => {
//     callback(null, req.body.name);
//   },
// });
// const upload = multer({ storage: storage });
// server.post("/api/upload", upload.single("file"), (req, res) => {
//   res.status(200).json("File has been uploaded successfully!");
// });

server.use("/api/posts", PostRoute);
server.use("/api/category", CategoryPostRoute);
server.use("/api/users", AuthRoute);

server.use((req, res, next) => {
  const error = new HttpError("Could not find this route.");
  throw error;
});

mongoose
  .connect(
    "mongodb+srv://vtpq3009:vtpq3009@cluster0.ybll9.mongodb.net/CT239?retryWrites=true&w=majority"
  )
  .then(() => {
    server.listen(5000);
  })
  .catch((err) => console.error(err));
