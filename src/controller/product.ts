import { Repository } from "typeorm";
import { productRepository } from "../repository/productRepository";
import { Product } from "../entity/Product";
import { Request, Response } from "express";
import ProductService from "../services/product";

export default class ProductController {
    productService : ProductService;

   constructor(){
     this.productService = new ProductService();
   }

   async getOne(req:Request,res:Response){
       const {id} = req.params;
       try{
         const product = await this.productService.getOneById(id);
         res.status(200).send(product);
       }catch(err){
        res.status(404).send("Not Found");
       }
   }

   async getAll(req:Request,res:Response){
      try{
       const products = await this.productService.getList();
       res.status(200).send(products)
      }catch(err){
       res.status(404).send("Not Found");
      }
       ;
   }

   async create(req:Request,res:Response){
    const body = req.body;
    try{
    const product = await this.productService.create(body);
    res.status(200).send(product);
    }catch(err){
        res.status(200).send(err.message);
    }
   }

   async update(req:Request,res:Response){
     const body = req.body;
     const {id} = req.params;
     try{
        const result = await this.productService.update(id,body);
        res.status(200).send(result);
     }catch(err){
        res.status(200).send(err.message);
     }
   }

   async delete(req:Request,res:Response){
    const { id } = req.params;
    try{
        const result = await await this.productService.delete(id);
        res.status(200).send(result);
    }catch(err){
        res.status(200).send(err.message);
    }
   }

}
