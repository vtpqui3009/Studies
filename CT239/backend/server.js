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
const nodemailer = require("nodemailer");

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
    fs.unlink(req.file.path, (err) => {});
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

server.use("/api/posts", PostRoute);
server.use("/api/category", CategoryPostRoute);
server.use("/api/users", AuthRoute);

mongoose
  .connect(
    "mongodb+srv://vtpq3009:vtpq3009@cluster0.ybll9.mongodb.net/CT239?retryWrites=true&w=majority"
  )
  .then(() => {
    server.listen(5000);
  })
  .catch((err) => console.error(err));
