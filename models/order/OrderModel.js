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
          alterNames: {
            type: String,
          },
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
    },
    status: {
      type: String,
      required: true,
      default: "pending",
    },
    totalPrice: {
      type: Number,
      required: true,
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
      type: {
        province: String,
        city: String,
        postalCode: Number,
        homeOrOffice: String,
        address: String,
        name: String,
        landMark: String,
      },
      required: true,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  { timestamps: true },
);
const OrderModel = mongoose.model("Order", orderSchema);
export default OrderModel;
