import mongoose, { models, Schema } from "mongoose";

const clientesSchema = new Schema({
  identificación: { type: String, required: true },
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  createdAt: { type: String, required: false },
});
const clientes = models.clientes || mongoose.model("clientes", clientesSchema);
export default clientes;
