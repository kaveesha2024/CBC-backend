import express from 'express';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import cors  from 'cors';
import mongoose from 'mongoose';
import UserRouter from "./api_routes/User/userRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

try {
    mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log('MongoDB Connected');
    }).catch((err) => console.log(err));
}catch(err) {console.log('MongoDB Error: ', err)}


// try {
//     const res = await mongoose.connect(process.env.MONGODB_URI)
//     console.log("MongoDB Connected");
// }catch(err){console.log(err)}

app.use('/api/users', UserRouter)

app.listen( port, () => {
    console.log(`server is running on "http://${host}:${port}"`);
});