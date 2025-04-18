import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    orderNumber: {
      type: String,
      required: true,
      unique: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    customerEmail: {
      type: String,
      required: true,
    },
    products: [
      {
        productInfo: {
          productId: {
            type: String,
            required: true,
          },
          name: {
            type: String,
            required: true,
          },
          alterNames: [{
              type: String,
              required: true,
          }],
          description: [
            {
              type: String,
            },
          ],
          images: [
            {
              type: String,
            },
          ],
          labelledPrice: {
            type: Number,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    totalLabelledPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    status: {
      type: String,
      required: true,
      default: "pending",
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    discount: {
      type: Number,
      default: 0,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
const OrderModel = mongoose.model("Order", orderSchema);
export default OrderModel;
