import ProductModel from "../../../models/Product/ProductModel.js";

const viewProductsController = async (req, res) => {
  if (req.user?.isAdmin) {
    try {
      const response = await ProductModel.find();
      res.json({
        status: 200,
        message: response,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error!",
      });
    }
    return;
  } 

    try {
      const response = await ProductModel.find({ isAvailable: true });
      res.json({
        status: 200,
        message: response,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error!",
      });
    }
  
};
export default viewProductsController;
