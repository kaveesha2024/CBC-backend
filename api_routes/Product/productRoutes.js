import express from "express";
import addProductsController from "../../controllers/Product/addProducts/AddProductsController.js";
import viewProductsController from "../../controllers/Product/viewProducts/ViewProductsController.js";
const ProductRouter = express.Router();

ProductRouter.post("/add", addProductsController);
ProductRouter.get("/", viewProductsController);

export default ProductRouter;
