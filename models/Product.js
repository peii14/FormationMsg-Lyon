import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    desc: {
      type: String,
      required: true,
      maxlength: 200,
    },
    Branch: {
      type: String,
      required: true,
      maxlength: 20,
    },
    Type: {
      type: String,
      required: true,
      maxlength: 20,
    },
    prices: {
      type: [Number],
      required: true,
    },
    Formation: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
