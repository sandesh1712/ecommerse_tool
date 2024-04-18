import { Request, Response } from "express";
import { OrderService } from "../services/order";

export class OrderController {
    orderService: OrderService;

   constructor(){
      this.orderService = new OrderService();
   }

   async createOrder(req:Request,res:Response){
       const {basketId} = req.body;
       try{
         const result = await this.orderService.create(basketId);
         res.status(200).send(result);
       }catch(err){
          res.status(500).send(err.message);
       }
    }

    async getOrder(req:Request,res:Response){
       try{
        const {id} = req.params;
         const order = await this.orderService.getOrder(id);
         return res.status(200).send(order);
       }catch(err){
          res.status(500).send(err.message);
       }
    }
}
