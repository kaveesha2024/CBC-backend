import ProductModel from "../../../models/Product/ProductModel.js";

const updateProductController = async (req, res) => {
  if (!req.user) {
    res.json({
      status: 401,
      message: "Trying to login first!",
    });
    return;
  }
  if (!req.body) {
    res.json({
      status: 401,
      message: "You haven't provide any detail",
    });
    return;
  }

  if (req.user.isAdmin) {
    const productId = req.query.productId;
    if (!productId) {
      res.json({
        status: 401,
        message: "Product id is missing!",
      });
      return;
    }
    try {
      const response = await ProductModel.updateOne({ productId }, req.body);
      res.status(200).json({
        status: 200,
        response: response,
        message: "product updated successfully"
      });
    } catch (error) {
      res.json({
        status: 500,
        message: "Internal Server Error",
      });
    }
  } else {
    res.json({
      status: 401,
      message: "You are not authorized to access this page!",
    });
  }
};
export default updateProductController;
