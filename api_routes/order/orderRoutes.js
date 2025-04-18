import express from "express";
import orderController from "../../controllers/order/OrderController.js";
import viewOrdersController from "../../controllers/order/viewOrders/ViewOrdersController.js";

const orderRouter = express.Router();

orderRouter.post("/neworder", orderController);
orderRouter.get("/", viewOrdersController);

export default orderRouter;