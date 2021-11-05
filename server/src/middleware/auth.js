import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  const JWT_SECRET = process.env.JWTSEC;
  try {
    const token = req.headers.authorization?.split(" ")[1];

    const decodedData = jwt.verify(token, JWT_SECRET);

    req.userId = decodedData?.id;

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
