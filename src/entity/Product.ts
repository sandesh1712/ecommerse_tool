import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductImages } from "./ProductImages";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true,nullable:false})
    name: string;

    @Column({nullable:false})
    description: string;

    @Column({type:'int',default:0})
    stock: number;

    @OneToMany(()=>ProductImages,(productImage)=>productImage.product,{cascade:["insert", "update", "remove", "soft-remove", "recover"],eager:true})
    productImages: ProductImages[];

    @Column({type:'float',nullable:false})
    price: number;

    @Column({nullable:false})
    unit: string;
}
