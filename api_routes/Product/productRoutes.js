import express from "express";
import addProductsController from "../../controllers/Product/addProducts/AddProductsController.js";
import viewProductsController from "../../controllers/Product/viewProducts/ViewProductsController.js";
import updateProductController from "../../controllers/Product/updateProducts/UpdateProductController.js";
const ProductRouter = express.Router();

ProductRouter.get("/", viewProductsController);
ProductRouter.post("/add", addProductsController);
ProductRouter.put("/update", updateProductController);

export default ProductRouter;
