import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT;
const host = process.env.HOST;


app.listen( port, () => {
    console.log(`server is started on "http://${host}:${port}"`);
});