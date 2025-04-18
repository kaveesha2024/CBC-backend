import ProductModel from "../../../models/Product/ProductModel.js";

const viewProductsController = async (req, res) => {
    if (!req.user) {
        try {
            const response = await ProductModel.find();
            res.status(200).json(response);
        }
        catch (error) {
            res.status(500).json(error);
        }
        return ;
    }

    if (req.user.isBlocked) {
        return res.status(401).json({
            message: "You can't access this site",
        });
    }else {
        try {
            const response = await ProductModel.find();
            res.status(200).json(response);
        }
        catch (error) {
            res.status(500).json(error);
        }
    }
};
export default viewProductsController;