import { Router } from "express";
import { BasketController } from "../controller/basket";

const router = Router();

const basketController = new BasketController();
router.get("/:id",(req,res)=>basketController.getBasket(req,res));
router.post("/:id/add",(req,res)=>basketController.addToBasket(req,res));
router.put("/:id/update/:basketItemId",(req,res)=>basketController.updateBasket(req,res));
router.delete("/:id/remove/:basketItemId",(req,res)=>basketController.removeFromBasket(req,res));


export default router;
