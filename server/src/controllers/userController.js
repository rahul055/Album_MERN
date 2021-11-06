import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();

export const signinUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(404).json("Please add all the fields");
  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) return res.status(404).json("user dosen't exists");

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) return res.status(400).json("Invalid credentials");

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.JWTSEC,
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signupUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password)
    return res.status(404).json("Please add all the fields");
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) return res.status(404).json("user already exists");

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.JWTSEC,
      { expiresIn: "1h" }
    );

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
