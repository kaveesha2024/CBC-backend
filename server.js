import express from 'express';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import cors  from 'cors';
import mongoose from 'mongoose';

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

app.listen( port, () => {
    console.log(`server is started on "http://${host}:${port}"`);
});