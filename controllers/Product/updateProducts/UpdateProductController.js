import ProductModel from "../../../models/Product/ProductModel.js";

const updateProductController = async (req, res) => {
  if (!req.user) {
    res.status(401).json({
      message: "Trying to login first!",
    });
    return;
  }
  if (!req.body) {
    res.status(404).json({
      message: "You haven't provide any detail",
    });
    return;
  }

  if (req.user.isAdmin) {
    const productId = req.query.productId;
    if (!productId) {
      res.status(401).json({
        message: "Product id is missing!",
      });
      return;
    }
    try {
      const response = await ProductModel.updateOne({ productId }, req.body);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  } else {
    res.status(401).json({
      message: "You are not authorized to access this page!",
    });
  }
};
export default updateProductController;
