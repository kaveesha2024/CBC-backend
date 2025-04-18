import express from "express";
import addProductsController from "../../controllers/Product/addProducts/AddProductsController.js";
import viewProductsController from "../../controllers/Product/viewProducts/ViewProductsController.js";
import updateProductController from "../../controllers/Product/updateProducts/UpdateProductController.js";
import viewProductByIdController from "../../controllers/Product/viewProductById/ViewProductByIdController.js";
const ProductRouter = express.Router();

ProductRouter.get("/", viewProductsController);
ProductRouter.get("/product", viewProductByIdController);
ProductRouter.post("/add", addProductsController);
ProductRouter.put("/update", updateProductController);

export default ProductRouter;
