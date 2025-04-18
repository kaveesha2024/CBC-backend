import ProductModel from "../../../models/Product/ProductModel.js";

const viewProductsController = async (req, res) => {
    try {
        const response = await ProductModel.find();
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
export default viewProductsController;