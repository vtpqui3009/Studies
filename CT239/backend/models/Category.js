const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const CategorySchema = new Schema({
  name: { type: String, required: true },
  slug: { type: String, slug: ["name"], unique: true },
  isApproved: { type: String, required: true, default: "UnApproved" },
});
CategorySchema.set("timestamps", true);
module.exports = mongoose.model("Category", CategorySchema);
