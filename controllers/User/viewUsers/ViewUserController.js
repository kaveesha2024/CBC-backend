import UserModel from "../../../models/User/UserModel.js";

const viewUserController = async (req, res) => {
  if (!req.user) {
    return res.status(401).json({
      message: "You have to sign in first!",
    });
  }
  if (req.user.isAdmin) {
    try {
      const response = await UserModel.find();
      res.status(200).json(response);
    } catch (err) {
      res.status(401).json(err);
    }
  } else {
    res.status(401).json({
      message: "You don't have permission to view Users",
    });
  }
};
export default viewUserController;
