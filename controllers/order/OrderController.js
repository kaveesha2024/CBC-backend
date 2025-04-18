import OrderModel from "../../models/order/OrderModel.js";
import ProductModel from "../../models/Product/ProductModel.js";

const orderController = async (req, res) => {
  if (!req.user) {
    res.status(401).json({
      message: "You have to sign in first!",
    });
    return;
  }
  if (req.user.isAdmin) {
    res.status(401).json({
      message: "Administrators can not place orders!",
    });
    return;
  }

  if (!req.body.products.length > 0) {
    res.status(401).json({
      message: "You can not place orders with zero products!",
    });
    return;
  }

  let orderNumber = "";
  const response = await OrderModel.find().sort({ createdAt: -1 }).limit(1);
  if (response.length > 0) {
    const lastOrderNumberString = response[0].orderNumber;
    const lastOrderNumberStringWithoutCBCODR = lastOrderNumberString.replace(
      "CBCODR",
      "",
    );
    const lastOrderNumber = parseInt(lastOrderNumberStringWithoutCBCODR);
    const nextOrderNumberNumber = lastOrderNumber + 1;
    orderNumber = "CBCODR" + nextOrderNumberNumber.toString().padStart(5, "0");
  } else {
    orderNumber = "CBCODR00001";
  }
  if (!req.body) {
    res.status(401).json({
      message: "You haven't provide any detail.",
    });
    return;
  }
  let customerName = "";
  if (!req.body.customerName) {
    customerName = req.user.firstName + " " + req.user.lastName;
  } else {
    customerName = req.body.customerName;
  }
  const { phoneNumber, address, products } = req.body;
  try {
    let totalPrice = 0;
    let totalLabelledPrice = 0;
    let totalDiscount = 0;
    let validProducts = [];

    for (let i = 0; i < products.length; i++) {
      const item = products[i];

      const response = await ProductModel.findOne({ productId: item.product });
      if (!response) {
        res.status(404).json({
          message: "Product not found!",
        });
        return;
      }
      validProducts[i] = {
        productInfo: {
          productId: response.productId,
          name: response.name,
          alterNames: response.alterNames,
          description: response.description,
          images: response.images,
          labelledPrice: response.labelledPrice,
          price: response.price,
        },
        quantity: products[i].quantity,
      };
      totalLabelledPrice += response.labelledPrice * products[i].quantity;
      totalDiscount += response.discounts * products[i].quantity;
      totalPrice += response.price * products[i].quantity;
    }

    const order = new OrderModel({
      customerName,
      orderNumber,
      customerEmail: req.user.email,
      products: validProducts,
      totalLabelledPrice,
      totalPrice,
      phoneNumber,
      address,
      discount: totalDiscount,
    });
    const response = await order.save();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};
export default orderController;
