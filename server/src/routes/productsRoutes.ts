import { Router } from "express";
import {
  userSignIn,
  userSignUp
} from "../controllers/userController";
import { protect } from "../middleware/protect";
const router = Router();

router.route("/sign-in").post(protect, userSignIn);
router.route("/sign-up").post(userSignUp);

export default router;
