import {Router} from "express";
import { AuthController } from "../controller/auth";

const router = Router();
const authController = new AuthController();

router.post("/signup",(req,res)=>authController.create(req,res));
router.post("/signin",(req,res)=>authController.signIn(req,res));

export default router;
