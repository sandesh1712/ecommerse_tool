import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";
import SuperEntity from "./SuperEntity";

@Entity()
export class ProductImages extends SuperEntity {
   @Column()
   url:string;

   @ManyToOne(()=>Product,(product)=>product.productImages)
   product: Product;
}
