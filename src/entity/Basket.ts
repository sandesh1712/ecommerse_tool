import { Column, Entity, JoinTable, ManyToOne, OneToMany, OneToOne } from "typeorm";
import SuperEntity from "./SuperEntity";
import { BasketStatus } from "../types/basket";
import { User } from "./User";
import { BasketItem } from "./BasketItem";
import { Order } from "./Order";

@Entity()
export class Basket extends SuperEntity {

    @Column({type:'float'})
    basketTotal:number;

    @Column({type:'enum',enum:BasketStatus,default:BasketStatus.ACTIVE})
    status: BasketStatus

    @ManyToOne(()=>User,(user)=>user.basket,{eager:true})
    @JoinTable()
    user:User

    @OneToMany(()=>BasketItem,(basketItem)=>basketItem.basket)
    @JoinTable()
    basketItems:Basket

    @OneToOne(()=>Order,order=>order.basket,{nullable:true})
    order: Order
}
