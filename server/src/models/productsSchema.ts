import { Schema, model } from "mongoose";

export const productSchema = new Schema({
    name: {
      type: String,
      required: [true, "please, add a name for this product"],
    },
    description: {
      type: String,
      required: [true, "please, add a description for this product"],
    },
    category: {
      type: String,
      required: [true, "please, add a category for this product"],
    }
  },
  { 
    timestampsh: true, toJSON: { virtuals: true } 
  }
);

export default model("products", productSchema);
