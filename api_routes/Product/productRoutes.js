import express from "express";
import addProductsController from "../../controllers/Product/addProducts/AddProductsController.js";
import viewProductsController from "../../controllers/Product/viewProducts/ViewProductsController.js";
const ProductRouter = express.Router();

ProductRouter.get("/", viewProductsController);
ProductRouter.post("/add", addProductsController);

export default ProductRouter;
