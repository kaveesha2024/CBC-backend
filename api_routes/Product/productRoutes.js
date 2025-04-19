import express from "express";
import addProductsController from "../../controllers/Product/addProducts/AddProductsController.js";
import viewProductsController from "../../controllers/Product/viewProducts/ViewProductsController.js";
import updateProductController from "../../controllers/Product/updateProducts/UpdateProductController.js";
import viewProductByIdController from "../../controllers/Product/viewProductById/ViewProductByIdController.js";
import submitReviewController from "../../controllers/reviews/submitReview/SubmitReviewController.js";
import updateReviewController from "../../controllers/reviews/updateReview/UpdateReviewController.js";
const ProductRouter = express.Router();

ProductRouter.get("/", viewProductsController);
ProductRouter.get("/product", viewProductByIdController);
ProductRouter.post("/add", addProductsController);
ProductRouter.put("/update", updateProductController);
ProductRouter.post("/review", submitReviewController);
ProductRouter.put("/review/update", updateReviewController);

export default ProductRouter;
