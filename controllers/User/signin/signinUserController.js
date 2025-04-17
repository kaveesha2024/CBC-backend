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
      const {
        _id,
        firstName,
        lastName,
        email,
        isAdmin,
        isBlocked,
        phoneNumber,
        profileImage,
      } = user;

      const token = jwt.sign(
        {
          _id,
          firstName,
          lastName,
          email,
          isAdmin,
          isBlocked,
          phoneNumber,
          profileImage,
        },
        process.env.JWT_SECRET
      );

      res.json(token);
      return;
    } else {
      res.json({
        message: "Invalid Password",
      });
      return;
    }
  }
};

export default signinUserController;
