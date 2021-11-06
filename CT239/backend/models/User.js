const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minLength: 8 },
  avatar: { type: String, default: "" },
  role: { type: String, required: false, default: "author" },
});
UserSchema.plugin(uniqueValidator);
UserSchema.set("timestamps", true);
module.exports = mongoose.model("User", UserSchema);
