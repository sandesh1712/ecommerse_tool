import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

@Entity()
export class ProductImages {
   @PrimaryGeneratedColumn()
   id:number;

   @Column()
   url:string;

   @ManyToOne(()=>Product,(product)=>product.productImages)
   product: Product;
}
