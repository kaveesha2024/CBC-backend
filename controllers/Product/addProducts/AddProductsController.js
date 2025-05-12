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

    let id = "";
    const response = await ProductModel.find().sort({ createdAt: -1 }).limit(1);
    if (response.length > 0) {
      const lastProductIdString = response[0].productId;
      const lastProductIdStringWithoutCBC = lastProductIdString.replace(
        "CBC",
        "",
      );
      const lastProductIdNumber = parseInt(lastProductIdStringWithoutCBC);
      const nextProductIdNumber = lastProductIdNumber + 1;
      id = "CBC" + nextProductIdNumber.toString().padStart(5, "0");
    } else {
      id = "CBC00001";
    }
    const {
      name,
      description,
      brand,
      images,
      labelledPrice,
      price,
      discounts,
      category,
      quantity,
      alterNames,
    } = req.body;

    const product = new ProductModel({
      name,
      productId: id,
      description,
      brand,
      images,
      labelledPrice,
      price,
      discounts,
      category,
      quantity,
      alterNames,
    });

    try {
      const response = await product.save();
      res.status(200).json({
        status: 200,
        message: "Product added successfully",
        data: response,
      });
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
