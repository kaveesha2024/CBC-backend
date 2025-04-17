import bcrypt from "bcrypt";
import dotenv from "dotenv";
import UserModel from "../../../models/User/UserModel.js";
dotenv.config();

const signupUserController = async (req, res) => {
  if (req.body == null) {
    res.status(400).json({
      message: "Provide customer details!",
    });
    return;
  }
  if (!req.body.email) {
    return res.status(400).json({
      message: "Email is required",
    });
  }
  // const email = req.body.email;
  const alreadyExistingEmail = await UserModel.findOne({ email: req.body.email });

  if (!alreadyExistingEmail) {
      if (
          !req.body.firstName ||
          !req.body.salt ||
          !req.body.email ||
          !req.body.password
      ) {
          return res.status(400).json({
              error: "Fill all the required fields",
          });
      }
      const { firstName, lastName, email, password, phoneNumber, salt } = req.body;
      const saltedPassword = password + salt;
      const hashedPassword = bcrypt.hashSync(saltedPassword, 12);

      const user = new UserModel({
          firstName,
          lastName,
          email,
          password: hashedPassword,
          salt,
          phoneNumber,
      });

      try {
          const response = await user.save();
          return res.status(200).json(response);
      } catch (error) {
          res.status(400).json(error);
      }
  }else {
      return res.status(401).json({
          message: "Email already exist. You can try to sign in.",
      })
  }

};
export default signupUserController;
