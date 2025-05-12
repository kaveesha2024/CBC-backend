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
    alterNames: [String],
    description: {
      type: [String],
    },
    brand: String,
    images: [String],
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
    reviews: [
      {
        type: {
          comments: {
            type: String,
            required: true,
          },
          images: [String],
          isHidden: {
            type: Boolean,
            default: false,
            required: true,
          },
        },
        default: [],
      }
    ]
  },
  { timestamps: true },
);

const ProductModel = mongoose.model("Products", productSchema);
export default ProductModel;
