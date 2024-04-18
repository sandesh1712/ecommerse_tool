import { Request, Response } from "express";
import { BasketService } from "../services/basket";

export class BasketController {
    basketService: BasketService;

   constructor(){
      this.basketService = new BasketService();
   }

   async addToBasket(req:Request,res:Response){
       const {body} = req;
       const {id} = req.params;
       try{
         const result = await this.basketService.addToBasket(id,body);
         res.status(200).send(result);
       }catch(err){
          res.status(500).send(err.message);
       }
    }

    async removeFromBasket(req:Request,res:Response){
       const {id,basketItemId} = req.params;
       try{
        const result = await this.basketService.removeFromBasket(id,basketItemId);
        res.status(200).send(result);
       }catch(err){
          res.status(500).send(err.message);
       }
    }

    async updateBasket(req:Request,res:Response){
        const {id,basketItemId} = req.params;
        const {body} = req;
       try{
        const result = await this.basketService.updateBasketItem(id,basketItemId,body);
        res.status(200).send(result);
       }catch(err){
          res.status(500).send(err.message);
       }
    }

    async getBasket(req:Request,res:Response){
        const {id} = req.params;
        try{
            const result = await this.basketService.getOneBasketById(id);
            res.status(200).send(result);
        }catch(err){
              res.status(500).send(err.message);
        }
    }

}
