const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const slug = require("mongoose-slug-generator");

const options = {
  separator: "-",
  lang: "en",
  truncate: 120,
};

mongoose.plugin(slug, options);

const PostSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  slug: { type: String, slug: ["title"], unique: true },
  author: { type: String, required: true },
  category: { type: String, required: true, unique: true },
  isApproved: { type: String, required: false, default: "UnApproved" },
});
PostSchema.set("timestamps", true);
module.exports = mongoose.model("Post", PostSchema);
