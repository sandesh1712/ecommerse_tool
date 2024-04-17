import {Router} from "express";
import UserController from "../controller/user";

const router = Router();
const userController = new UserController();

router.post("/signup",(req,res)=>userController.create(req,res));
router.get("/:id/basket",(req,res)=>userController.getActiveBasketForUser(req,res))


export default router;



