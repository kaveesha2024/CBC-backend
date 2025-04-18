import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: [String],
    },
    brand: String,
    images: [String],
    reviews: {
      type: [
        {
          comments: {
            type: String,
            required: true,
          },
          images: [String],
        },
      ],
      default: [],
    },
    labelledPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    discounts: {
      type: Number,
      default: 0,
    },
    category: String,
    isAvailable: {
      type: Boolean,
      default: true,
      required: true,
    },
    quantity: {
      required: true,
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

const ProductModel = mongoose.model("Products", productSchema);
export default ProductModel;
