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

    // const productId = async () => {
    //   const response = await ProductModel.find().sort({ createdAt: -1 }).limit(1);
    //   console.log(response);
    //   if ( !response ) {
    //     return "CBC00001";
    //   }else {
    //     return response.productId;
    //   }
    // };

    let id = "";

    // try {
    //   const response = await ProductModel.find().sort({ createdAt: -1 }).limit(1);
    //   if (response === 0) {
    //     return;
    //   }
    //
    //   productId = response[0].productId;
    //
    // }catch (error) {
    //   res.status(500).json(error)
    // }

    const response = await ProductModel.find().sort({ createdAt: -1 }).limit(1);
    if ( response.length > 0 ) {
      const lastProductIdString = response[0].productId;
      // const lastProductIdString = "CBC00341";
        const lastProductIdStringWithoutCBC = lastProductIdString.replace('CBC', '');
        const lastProductIdNumber = parseInt(lastProductIdStringWithoutCBC); //341
        const nextProductIdNumber = lastProductIdNumber + 1; //342
        const nextProductIdString = 'CBC' + nextProductIdNumber.toString().padStart(5, '0');
        id = nextProductIdString;
    }else {
      id = "CBC00001";
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
      productId: id,
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
