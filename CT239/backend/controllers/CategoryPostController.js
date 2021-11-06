const HttpError = require("../models/http-error");
// const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");
const Category = require("../models/Category");
const getAllCategory = async (req, res, next) => {
  let category;
  try {
    category = await Category.find();
  } catch (err) {
    const error = new HttpError(
      "Lấy dữ liệu category thất bại. Vui lòng thử lại.",
      500
    );
    next(error);
  }
  res.json({
    category: category.map((category) => category.toObject({ getters: true })),
  });
};
const getCategoryPostById = async (req, res, next) => {
  const cid = req.params.cid;
  let category;
  try {
    category = await Category.findById(cid);
  } catch (err) {
    const error = new HttpError(
      "Không tìm thấy danh mục bài viết với id này!",
      500
    );
    return next(error);
  }
  if (!category) {
    const error = new HttpError(
      "Không tìm thấy danh mục bài viết với id này!!",
      404
    );
    return next(error);
  }
  res.json({ category: category.toObject({ getters: true }) });
};
const createNewCategoryPost = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Dữ liệu nhập không hợp lệ. Vui lòng thử lại.", 422)
    );
  }

  const { name, slug } = req.body;
  const createdCategoryPost = new Category({
    name,
    slug,
    // posts: [],
  });
  try {
    await createdCategoryPost.save();
  } catch (err) {
    const error = new HttpError(
      "Tạo danh mục bài viết mới không thành công. Hãy thử lại.",
      500
    );
    return next(error);
  }

  res.status(201).json({ createdCategoryPost });
};
const updateCategoryPost = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Dữ liệu nhập không hợp lệ, hãy thử lại.", 422);
  }
  const { name } = req.body;
  const cid = req.params.cid;

  let category;
  try {
    category = await Category.findById(cid);
  } catch (err) {
    const error = new HttpError(
      "Không thể cập nhật danh mục bài viết. Vui lòng kiểm tra lại.",
      500
    );
    return next(error);
  }
  category.name = name;
  try {
    await category.save();
  } catch (err) {
    const error = new HttpError(
      "Không thể cập nhật danh mục bài viết. Vui lòng kiểm tra lại.",
      500
    );
    return next(error);
  }

  res.status(200).json({ category: category.toObject({ getters: true }) });
};

const deleteCategoryPost = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.cid);
    await category.delete();
    res.status(200).json("Xóa danh mục bài viết thành công!");
  } catch (err) {
    res.status(500).json(err);
  }
};
const updateCategoryStatus = async (req, res) => {
  try {
    const updateCategoryStatus = await Category.findByIdAndUpdate(
      req.params.cid,
      {
        $set: {
          isApproved: req.body.isApproved,
        },
      },
      { new: true }
    );
    res.status(200).json(updateCategoryStatus);
  } catch (err) {
    res.status(500).json(err);
  }
};
exports.updateCategoryStatus = updateCategoryStatus;
exports.createNewCategoryPost = createNewCategoryPost;
exports.getAllCategory = getAllCategory;
exports.getCategoryPostById = getCategoryPostById;
exports.updateCategoryPost = updateCategoryPost;
exports.deleteCategoryPost = deleteCategoryPost;
