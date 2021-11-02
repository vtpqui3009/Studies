const express = require("express");
const { check } = require("express-validator");

const UserController = require("../controllers/UserController");
const fileUpload = require("../middleware/file-upload");
const User = require("../models/User");
const router = express.Router();

router.get("/all-user", UserController.getAllUser);

router.post(
  "/sign-up",
  fileUpload.single("image"),
  [
    check("name").not().isEmpty(),
    check("username").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  UserController.signUp
);
router.get("/:uid", UserController.getUserById);
router.post("/sign-in", UserController.signIn);
router.patch("/update/:uid", UserController.updateUser);
router.delete("/delete/:uid", UserController.deleteUser);
module.exports = router;
