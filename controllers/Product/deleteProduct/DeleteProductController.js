import ProductModel from "../../../models/Product/ProductModel.js";

const deleteProductController = async (req, res) => {
    if (!req.user) {
        res.json({
            status: 401,
            message: "You have to sign in first!",
        });
        return;
    }
    if (!req.user.isAdmin) {
        res.json({
            status: 401,
            message: "You are not authorized to access this page!",
        })
    }
    try{
        const response = await ProductModel.deleteOne({productId: req.query.productId});
        if(response.deletedCount === 1){
            res.status(200).json({
                status: 200,
                message: "Product deleted successfully"
            })
        }else{
            res.status(200).json({
                status: 404,
                message: "Product not found"
            })
        }
    }catch(err){
        console.log(err)
    }
}
export default deleteProductController;