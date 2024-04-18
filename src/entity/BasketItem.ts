import { Column, Entity, ManyToOne } from "typeorm";
import SuperEntity from "./SuperEntity";
import { Product } from "./Product";
import { Basket } from "./Basket";

@Entity()
export class BasketItem extends SuperEntity{
    @Column({type: 'float'})
    total: number

    @Column({type: 'int'})
    quantity: number

    @ManyToOne(()=>Product,(product)=>product.basketItems,{eager:true,cascade:["update"]})
    product: Product

    @ManyToOne(()=>Basket,(basket)=>basket.basketItems)
    basket: Basket
}
