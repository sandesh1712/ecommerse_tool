import { Repository } from "typeorm";
import { Product } from "../entity/Product";
import AppDataSource from "../data-source";

export default class ProductService {
   productRepository: Repository<Product>;

   constructor(){
     this.productRepository = AppDataSource.getRepository(Product);
   }

   async getOneById(id:string){
      return await this.productRepository.findOneBy({id: parseInt(id)});
   }

   async getList(){
    return await this.productRepository.find();
   }

   async create(obj:Product){
    const result = this.productRepository.create(obj);
    return await this.productRepository.save(result);
   }

   async update(id:string,obj:Product){
     return await this.productRepository.update({id: parseInt(id)},obj);
   }

   async delete(id:string){
     return await this.productRepository.delete({id: parseInt(id)});
   }
}
