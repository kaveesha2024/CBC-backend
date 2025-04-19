import UserModel from "../../../models/User/UserModel.js";

const updateUserController = async (req, res) => {
  if (!req.user) {
    res.status(401).json({
      message: "You have to sign in first!",
    })
  }else {
    if (req.user.isAdmin) {
      if (!req.body) {
        res.status(404).json({
          message: "You haven't provide any detail",
        });
        return;
      }
      const userId = req.query.userid;
      if (!userId) {
        res.status(404).json({
          message: "User id is missing!",
        });
        return;
      }
      try {
        const response = await UserModel.updateOne({ _id:userId }, req.body);
        res.status(200).json(response);
      }
      catch (error) {
        res.status(500).json({
          message: "Internal Server Error",
        });
      }
    }else {
      res.status(401).json({
        message: "You are not authorized to access this page!",
      })
    }
  }
};
export default updateUserController;