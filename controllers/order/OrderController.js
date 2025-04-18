import OrderModel from "../../models/order/OrderModel.js";


const orderController = async (req, res) => {
    if (!req.user) {
        res.status(401).json({
            message: 'You have to sign in first!',
        });
        return;
    }
    if (req.user.isAdmin) {
        res.status(401).json({
            message: "Administrators can not place orders!",
        });
        return;
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////
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
    ////////////////////////////////////////////////////////////////////////////////////////////
    if (!req.body){
        res.status(401).json({
            message: "You haven't provide any detail.",
        });
        return;
    }
    ////////////////////////////////////////////////////////////////////////////////
    let customerName = "";
     if (!req.body.customerName) {
         customerName = req.user.firstName + " " + req.user.lastName;
     }else {
         customerName = req.body.customerName;
     }
    /////////////////////////////////////////////////////////////////////////////////
    const { products, totalLabelledPrice, totalPrice, phoneNumber, address } = req.body;
    const order = new OrderModel({
        customerName,
        orderNumber,
        customerEmail: req.user.email,
        products,
        totalLabelledPrice,
        totalPrice,
        phoneNumber,
        address,
    });

    try {
        const response = await order.save();
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
        })
    }

};
export default orderController;