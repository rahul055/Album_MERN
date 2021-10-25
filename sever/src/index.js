import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

mongoose.connect(process.env.MONGO_URI, () => {
  console.log("connected to DB");
});
app.listen(process.env.PORT, () =>
  console.log("server is running on localhost" + process.env.PORT)
);
