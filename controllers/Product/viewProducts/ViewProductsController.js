import ProductModel from "../../../models/Product/ProductModel.js";

const viewProductsController = async (req, res) => {
    if (!req.user) {
        try {
            const response = await ProductModel.find({isAvailable: true});
            res.status(200).json(response);
        }catch (error) {
            res.status(500).json({
                message: "Internal Server Error!",
            })
        }
    }
    if (req.user.isAdmin) {
        try {
            const response = await ProductModel.find();
            res.status(200).json(response);
        }
        catch (error) {
            res.status(500).json({
                message: "Internal Server Error!",
            });
        }
    }else {
        try {
            const response = await ProductModel.find({isAvailable: true});
            res.status(200).json(response);
        }catch (error) {
            res.status(500).json({
                message: "Internal Server Error!",
            })
        }
    }
};
export default viewProductsController;