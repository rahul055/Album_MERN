import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import postRoute from "./routes/posts.js";
import userRoute from "./routes/user.js";
const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
app.use("/posts", postRoute);
app.use("/auth", userRoute);

mongoose.connect(process.env.MONGO_URI, () => {
  console.log("connected to DB");
});
app.listen(process.env.PORT, () =>
  console.log("server is running on localhost" + process.env.PORT)
);
