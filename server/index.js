require("@babel/core").transform("code", {
    presets: ["@babel/preset-env"],
});
require("dotenv").config();
import express from "express";
import cors from "cors";
import helmet from "helmet";

// Routes
import Routes from './routes';

const db = require("./database");

const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());

app.use('/insta', Routes);

app.listen(4000, () => {
    db()
        .then(() => {
            console.log("Server is running !!!");
        })
        .catch((error) => {
            console.log("Server is running but Database connection failed");
            console.log(error);
        });
});