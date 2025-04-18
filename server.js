import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import UserRouter from "./api_routes/User/userRoutes.js";
import checkUser from "./middleware/checkUser.js";
import ProductRouter from "./api_routes/Product/productRoutes.js";
import blockUser from "./middleware/blockUser.js";

dotenv.config();

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(checkUser);
app.use(blockUser)

try {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch((err) => console.log(err));
} catch (err) {
  console.log("MongoDB Error: ", err);
}

app.use("/api/users", UserRouter);
app.use("/api/products", ProductRouter);

app.listen(port, () => {
  console.log(`server is running on "http://${host}:${port}"`);
});
