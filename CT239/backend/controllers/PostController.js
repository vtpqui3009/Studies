const HttpError = require("../models/http-error");
const fs = require("fs");
const Post = require("../models/Post");

const createNewPost = async (req, res, next) => {
  const { title, description, content, image, author, category } = req.body;
  const createdPost = new Post({
    title,
    description,
    content,
    image: req.file.path,
    author,
    category,
  });
  try {
    await createdPost.save();
  } catch (err) {
    const error = new HttpError(
      "Tạo bài viết mới không thành công. Hãy thử lại.",
      500
    );
    return next(error);
  }
  res.status(201).json({ createdPost });
};
//UPDATE POST
const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.pid,
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          content: req.body.content,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};
const updatePostStatus = async (req, res) => {
  try {
    const updatePostStatus = await Post.findByIdAndUpdate(
      req.params.pid,
      {
        $set: {
          isApproved: req.body.isApproved,
        },
      },
      { new: true }
    );
    res.status(200).json(updatePostStatus);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.pid);
    const imagePath = post.image;
    fs.unlink(imagePath, (err) => {
      console.log(err);
    });
    await post.delete();
    res.status(200).json("Xóa bài viết thành công!");
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllPost = async (req, res, next) => {
  let posts;
  try {
    if (req.query.catName) {
      posts = await Post.find().where("category").equals(req.query.catName);
    } else if (req.query.sort) {
      posts = await Post.find().sort({ createdAt: -1 });
    } else {
      posts = await Post.find();
    }
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
  res
    .status(200)
    .json({ posts: posts.map((posts) => posts.toObject({ getters: true })) });
};

const getPostById = async (req, res, next) => {
  const postId = req.params.pid;
  let post;
  try {
    post = await Post.findById(postId);
  } catch (err) {
    const error = new HttpError("Không tìm thấy bài viết với id này!", 500);
    return next(error);
  }
  if (!post) {
    const error = new HttpError("Không tìm thấy bài viết này!", 404);
    return next(error);
  }
  res.json({ post });
};

exports.createNewPost = createNewPost;
exports.getAllPost = getAllPost;
exports.getPostById = getPostById;
exports.updatePost = updatePost;
exports.deletePost = deletePost;
exports.updatePostStatus = updatePostStatus;
