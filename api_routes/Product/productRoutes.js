import express from "express";
import addProductsController from "../../controllers/Product/addProducts/AddProductsController.js";
const ProductRouter = express.Router();

ProductRouter.post("/add", addProductsController);

export default ProductRouter;
