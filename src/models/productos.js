import mongoose, { models, Schema } from "mongoose";

const productsSchema = new Schema({
  name: { type: String, required: true },
  unityCost: { type: String, required: true },
  unityPrice: { type: String, required: true },
  existence: { type: String, required: true },
  status: { type: String, required: true },
  createAt : { type: String, required: true },
});
const products = models.products || mongoose.model("products", productsSchema);
export default products;
