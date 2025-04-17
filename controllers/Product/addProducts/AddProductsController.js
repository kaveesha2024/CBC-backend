// import ProductModel from "../../../models/Product/ProductModel";
const addProductsController = async (req, res) => {
    if (!req.user) {
        res.json({
            message: 'You have to sign in first!'
        });
        return;
    };
    if (req.user.isAdmin) {
        
        console.log('admin');
        
        
    }else {
        res.json({
            message: "You need to be an admin to add Products"
        });
        return;
    };
};

export default addProductsController;