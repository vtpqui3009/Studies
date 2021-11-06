const express = require("express");
const { check } = require("express-validator");

const CategoryPostController = require("../controllers/CategoryPostController");

const router = express.Router();
const checkAuth = require("../middleware/check-auth");

router.get("/all-category", CategoryPostController.getAllCategory);

router.patch(
  "/update/status/:cid",
  CategoryPostController.updateCategoryStatus
);

router.get("/:cid", CategoryPostController.getCategoryPostById);

router.use(checkAuth);

router.post(
  "/add-category",
  [check("name").not().isEmpty()],
  CategoryPostController.createNewCategoryPost
);

router.patch(
  "/update/:cid",
  [check("name").not().isEmpty()],
  CategoryPostController.updateCategoryPost
);

router.delete("/delete/:cid", CategoryPostController.deleteCategoryPost);

module.exports = router;
