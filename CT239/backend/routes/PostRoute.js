const express = require("express");
const { check } = require("express-validator");

const PostController = require("../controllers/PostController");
const fileUpload = require("../middleware/file-upload");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");

router.get("/:pid", PostController.getPostById);

router.get("/", PostController.getAllPost);

router.use(checkAuth);

router.post(
  "/add-post",
  fileUpload.single("image"),
  PostController.createNewPost
);

router.patch(
  "/update/:pid",
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("content").isLength({ min: 5 }),
  ],
  PostController.updatePost
);
router.patch("/update/status/:pid", PostController.updatePostStatus);
router.delete("/delete/:pid", PostController.deletePost);

module.exports = router;
