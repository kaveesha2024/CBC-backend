import jwt from "jsonwebtoken";
const checkUser = async (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    next();
    return;
  }
  const token = authHeader.replace("Bearer ", "");
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (!decoded) {
      res.json({
        message: "Invalid Token",
      });
      return;
    } else {
      req.user = decoded;
      next();
    }
  });
};
export default checkUser;
