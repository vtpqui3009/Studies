const jwt = require("jsonwebtoken");

const HttpError = require("../models/http-error");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1]; // Authorization: 'Bearer TOKEN'
    if (!token) {
      throw new Error(
        "Quá trình xác thực thát bại. Hãy kiểm tra lại token của bạn."
      );
    }
    const decodedToken = jwt.verify(
      token,
      "share_la_mat_tai_khoan_do_nghe_may"
    );
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {
    const error = new HttpError(
      "Quá trình xác thực thát bại. Hãy kiểm tra lại token của bạn.",
      401
    );
    return next(error);
  }
};
