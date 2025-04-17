import UserModel from "../../../models/User/UserModel.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const signinUserController = async (req, res) => {
  if (req.body == null) {
    res.status(400).json({
      message: "You haven't Provide your details!",
    });
    return;
  }

  if (!req.body.email || !req.body.password) {
    res.json({
      message: "Email & password required",
    });
    return;
  }

  const { email, password: userPassword } = req.body;

  // try {
  //     const user = await UserModel.findOne({ email });
  //     if (!user) {
  //         res.status(404).json({
  //             message : "User not found",
  //         });
  //         return;
  //     }

  // }catch (error) {
  //     console.log(error);
  // }

  const user = await UserModel.findOne({ email });
  if (!user) {
    res.status(404).json({
      message: "User not found",
    });
    return;
  } else {
    const saltedPassword = userPassword + user.salt;
    const isPasswordCorrect = await bcrypt.compareSync(
      saltedPassword,
      user.password
    );

    if (isPasswordCorrect) {
      res.json({
        message: "Login successful",
      });
    } else {
      res.json({
        message: "Invalid Password",
      });
      return;
    }
  }
};

export default signinUserController;
