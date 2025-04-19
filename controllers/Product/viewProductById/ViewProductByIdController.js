import ProductModel from "../../../models/Product/ProductModel.js";

const viewProductByIdController = async (req, res) => {
  if (!req.user || !req.user.isAdmin) {
    try {
      const productId = req.query.productid;
      if (!productId) {
        res.status(401).json({
          message: "Product id is missing!",
        });
        return;
      }
      const response = await ProductModel.findOne({ productId });
      if (!response) {
        res.status(404).json({
          message: "Product not found!",
        });
        return;
      }
      if (response.isAvailable) {
        res.status(200).json(response);
        return;
      } else {
        res.status(404).json({
          message: "Product not found!",
        });
        return;
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
      return;
    }
  }

  if (req.user.isAdmin) {
    const productId = req.query.productid;
    if (!productId) {
      res.status(401).json({
        message: "Product id is missing!",
      });
      return;
    }
    try {
      const response = await ProductModel.findOne({ productId });
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }

};
export default viewProductByIdController;
