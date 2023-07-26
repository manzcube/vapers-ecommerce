import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";
import { Request, Response, NextFunction } from "express";


export const protect = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        // Get the token from the header
        const token = req.headers.authorization.split(" ")[1];

        // Verify the token
        const decoded = jwt.decode(token, process.env.JWT);
        if (!decoded) throw new Error("no token");

        // Set the request user
        req.user = await User.findById(decoded.id).select("-password");
        
        // If token valid
        next();

      } catch (err) {
        throw new Error("Try signin in again :)");
      }
    } else {
      throw new Error("Sign In Please!");
    }
  } catch (err) {
    res.status(401).json(err.message);
  }
};
