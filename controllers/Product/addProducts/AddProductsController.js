import ProductModel from "../../../models/Product/ProductModel.js";
const addProductsController = async (req, res) => {
  if (!req.user) {
    res.status(401).json({
      message: "You have to sign in first!",
    });
    return;
  }
  if (req.user.isAdmin) {
    if (!req.body) {
      res.status(404).json({
        message: "Haven't provide any detail",
      });
      return;
    }

    if (
      !req.body.name ||
      !req.body.labelledPrice ||
      !req.body.price ||
      !req.body.quantity
    ) {
      res.status(404).json({
        message: "Fill all the required fields",
      });
      return;
    }

    const {
      name,
      description,
      brand,
      images,
      reviews,
      labelledPrice,
      price,
      discounts,
      category,
      quantity,
    } = req.body;

    const product = new ProductModel({
      name,
      description,
      brand,
      images,
      reviews,
      labelledPrice,
      price,
      discounts,
      category,
      quantity,
    });

    try {
      const response = await product.save();
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
    }

  } else {
    res.status(401).json({
      message: "You need to be an admin to add Products",
    });
  }
};

export default addProductsController;
