import { Router } from "express";
import { OrderController } from "../controller/order";

const router = Router();

const orderController = new OrderController();

router.post("/",(req,res)=>orderController.createOrder(req,res));
router.get("/:id",(req,res)=>orderController.getOrder(req,res))

export default router;
