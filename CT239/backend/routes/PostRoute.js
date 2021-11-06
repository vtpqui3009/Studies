const express = require("express");
// const { check } = require("express-validator");

const PostController = require("../controllers/PostController");
const fileUpload = require("../middleware/file-upload");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");

// router.use(checkAuth);

router.post(
  "/add-post",
  fileUpload.single("image"),
  checkAuth,
  PostController.createNewPost
);

router.get("/:pid", PostController.getPostById);

router.get("/", PostController.getAllPost);

router.patch("/update/:pid", checkAuth, PostController.updatePost);

router.patch("/update/status/:pid", checkAuth, PostController.updatePostStatus);

router.delete("/delete/:pid", checkAuth, PostController.deletePost);

module.exports = router;
