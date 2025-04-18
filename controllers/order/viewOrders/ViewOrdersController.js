import OrderModel from "../../../models/order/OrderModel.js";

const viewOrdersController = async (req,res) => {
    if (!req.user) {
        res.status(401).json({
            message: "You have to sign in first!",
        })
        return;
    }
    if (req.user.isAdmin) {
        try {
            const response = await OrderModel.find();
            res.status(200).json(response);
        }
        catch (error) {
            res.status(500).json({
                message: "Internal Server Error!",
            })
        }
    }else {
        res.status(401).json({
            message: "You are not authorized to access this page!",
        })
    }
};

export default viewOrdersController;