import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 60,
      required: true ,
    },
    prenom: {
      type: String,
      required: true,
      maxlength: 60,
    },
    Tel: {
      type: String,
      required: true,
      maxlength: 200,
    },
    Email: {
      type: String,
      required: true,
      maxlength: 200,
    },
    Address: {
      type: String,
      required: true,
      maxlength: 200,
    },
    Dates:{
      type: String,
      required: true,
      maxlength: 200,
    },
    Duration: {
      type: String,
      required: true,
      maxlength: 200,
    },
    Branch: {
      type: String,
      required: true,
      maxlength: 200,
    },
    Type: {
      type: String,
      required: true,
      maxlength: 200,
    },
    Formation: {
      type: String,
      required: true,
      maxlength: 200,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
