import { Router } from "express";
import { BasketController } from "../controller/basket";

const router = Router();

const basketController = new BasketController();
router.post("/:id/add",(req,res)=>basketController.addToBasket(req,res));
router.delete("/:id/remove/:basketItemId",(req,res)=>basketController.removeFromBasket(req,res));


export default router;
