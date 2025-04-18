import ProductModel from "../../../models/Product/ProductModel.js";

const updateProductController = async (req, res) => {
    if (!req.user) {
        res.status(401).json({
            message: "Trying to login first!",
        });
        return;
    }
    if (!req.body) {
        res.status(404).json({
            message: "You haven't provide any detail",
        });
        return;
    }

    const productId = req.query.productId;
    console.log(productId);

    try {
        const response = await ProductModel.updateOne({ productId }, req.body);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
        })
    }

};
export default updateProductController;