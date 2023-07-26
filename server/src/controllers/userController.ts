import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/userSchema";

const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

export const userSignUp = async (req: Request, res: Response) => {
  try {
    const { name, email, password, confirm_password } = req.body;

    const doesTheUserExist = await User.findOne({ email: email });
    if (doesTheUserExist) {
      throw new Error("There is already an account with this email");
    }

    // Check fields
    if (password !== confirm_password) {
      throw new Error("Passwords don't match");
    }

    // Hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(password, salt);

    // Create new user
    const user = await User.create({
      name,
      email,
      password: hashed_password,
    });

    // If the user was successfully created
    if (user) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id.toString()),
      });
    } else {
      throw new Error("User cannot be created");
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


export const userSignIn = async (req: Request, res: Response) => {
    try {
        // Check fields
        const { email, password } = req.body;
        if (!email) throw new Error("Email missing!")
        if (!password) throw new Error("Password missing!")

        // Check if the user exists
        const doesTheUserExist = await User.findOne({ email: email });
        if (!doesTheUserExist) {
            throw new Error("This user doesn't exist, please create an account");
        }

        // Verify password
        const check_password = await bcrypt.compare(password, doesTheUserExist.email)
        if  (!check_password) throw new Error("Wrong password!")

        if (doesTheUserExist && check_password) {
            res.status(201).json({
                _id: doesTheUserExist.id,
                name: doesTheUserExist.name,
                email: doesTheUserExist.email,
                token: generateToken(doesTheUserExist._id.toString()),
            });
        } else {
            throw new Error("Couldn't sign in :(")
        }
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  