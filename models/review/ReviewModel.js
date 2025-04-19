import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  images: [String],
  customerName: {
    type: String,
    required: true,
  },
  isHidden: {
    type: Boolean,
    default: false,
    required: true,
  },
});
const ReviewModel = mongoose.model("Reviews", reviewSchema);
export default ReviewModel;
