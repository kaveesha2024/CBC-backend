import express from "express";
import orderController from "../../controllers/order/OrderController.js";

const orderRouter = express.Router();

orderRouter.post("/neworder", orderController);

export default orderRouter;