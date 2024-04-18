import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, OneToOne } from "typeorm";
import SuperEntity from "./SuperEntity";
import { BasketStatus } from "../types/basket";
import { User } from "./User";
import { BasketItem } from "./BasketItem";
import { Order } from "./Order";

@Entity()
export class Basket extends SuperEntity {

    @Column({type:'float',nullable:false,default:0})
    basketTotal:number;

    @Column({type:'enum',enum:BasketStatus,default:BasketStatus.ACTIVE})
    status: BasketStatus

    @ManyToOne(()=>User,(user)=>user.basket,{lazy:true})
    @JoinTable()
    user:Promise<User>;

    @OneToMany(()=>BasketItem,(basketItem)=>basketItem.basket,{cascade:["insert","update","remove"],eager:true})
    @JoinTable()
    basketItems:BasketItem[]

    @OneToOne(()=>Order,order=>order.basket,{nullable:true,lazy:true})
    @JoinColumn()
    order: Order
}
