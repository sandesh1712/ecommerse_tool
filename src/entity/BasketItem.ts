import { Column, Entity, ManyToOne, OneToOne } from "typeorm";
import SuperEntity from "./SuperEntity";
import { Product } from "./Product";
import { Basket } from "./Basket";

@Entity()
export class BasketItem extends SuperEntity{
    @Column({type: 'float'})
    total: number

    @Column({type: 'int'})
    quantity: number

    @ManyToOne(()=>Product,(product)=>product.basketItems,{eager:true})
    product: Product

    @ManyToOne(()=>Basket,(basket)=>basket.basketItems)
    basket: Basket
}
