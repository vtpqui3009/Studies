const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const getAllUser = async (req, res, next) => {
  let user;
  try {
    user = await User.find({}, "-password");
  } catch (err) {
    const error = new HttpError(
      "Lấy dữ liệu user thất bại. Vui lòng thử lại sau.",
      500
    );
    next(error);
  }
  res.json({ user: user.map((user) => user.toObject({ getters: true })) });
};
const signUp = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.json(
      { message: "Dữ liệu nhập không hợp lệ. Hãy kiểm tra và thử lại ." },
      422
    );
  }
  const { name, username, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Đăng ký tài khoản không thành công.", 500);
    return next(error);
  }
  if (existingUser) {
    const error = new HttpError("Tài khoản đã tồn tại!", 422);
    return next(error);
  }
  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError("Có lỗĩ xảy ra, vui lòng thử lại.", 500);
    return next(error);
  }
  const createdUser = new User({
    name,
    username,
    email,
    password: hashedPassword,
    avatar: req.file.path,
  });
  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError(
      "Đăng ký tài khoản không thành công. Vui lòng thử lại",
      500
    );
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: createdUser.id, email: createdUser.email },
      "share_la_mat_tai_khoan_do_nghe_may",
      { expiresIn: "365d" }
    );
  } catch (err) {
    const error = new HttpError(
      "Đăng ký tài khoản không thành công. Vui lòng thử lại",
      500
    );
    return next(error);
  }

  res.json({ userId: createdUser.id, email: createdUser.email, token: token });
};
const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Đăng nhập không thành công. Vui lòng thử lại.",
      500
    );
    return next(error);
  }
  if (!existingUser) {
    const error = new HttpError(
      "Đăng nhập không thành công. Vui lòng thử lại",
      401
    );
    return next(error);
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError(
      "Đăng nhập không thành công. Vui lòng thử lại",
      500
    );
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError(
      "Đăng nhập không thành công. Vui lòng thử lại",
      401
    );
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: existingUser.id, email: existingUser.email },
      "share_la_mat_tai_khoan_do_nghe_may",
      { expiresIn: "365d" }
    );
  } catch (err) {
    const error = new HttpError(
      "Đăng nhập không thành công. Vui lòng thử lại",
      500
    );
    return next(error);
  }

  res.json({
    userId: existingUser.id,
    email: existingUser.email,
    token: token,
  });
};
const updateUser = async (req, res, next) => {
  const uid = req.params.uid;
  const { name, email, role } = req.body;
  let user;
  try {
    user = await User.findById(uid);
  } catch (err) {
    const error = new HttpError(
      "Không thể cập nhật user. Vui lòng thử lại sau.",
      500
    );
    return next(error);
  }
  user.name = name;
  user.email = email;
  user.role = role;

  try {
    user.save();
  } catch (err) {
    const error = new HttpError("Không thể cập nhật user", 500);
    return next(error);
  }
  res.status(200).json({
    message: "Cập nhật tài khoản thành công !",
    user: user.toObject({ getters: true }),
  });
};
const deleteUser = async (req, res, next) => {
  const uid = req.params.uid;
  let user;
  try {
    user = await User.findById(uid);
  } catch (err) {
    const error = new HttpError(
      "Không thể xóa tài khoản. Vui lòng thử lại sau.",
      500
    );
    return next(error);
  }
  try {
    fs.unlink(imagePath, (err) => {
      console.log(err);
    });
    user.remove();
  } catch (err) {
    const error = new HttpError("Không thể xóa tài khoản", 500);
    return next(error);
  }
  res.status(200).json({ message: "Xóa tài khoản thành công!" });
};
const getUserById = async (req, res, next) => {
  const userId = req.params.uid;
  let user;
  try {
    user = await User.findById(userId);
  } catch (err) {
    const error = new HttpError("Không tìm thấy user với id này!", 500);
    return next(error);
  }
  res.json({ user });
};
exports.getUserById = getUserById;
exports.signUp = signUp;
exports.signIn = signIn;
exports.getAllUser = getAllUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
