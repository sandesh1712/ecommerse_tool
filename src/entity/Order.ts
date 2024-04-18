import { Column, Entity, JoinTable, ManyToOne, OneToOne } from "typeorm";
import SuperEntity from "./SuperEntity";
import { User } from "./User";
import { Basket } from "./Basket";
import { OrderStatus } from "../types/order";

@Entity("orders")
export class Order extends SuperEntity{
    @Column({type: 'float',nullable:false})
    orderTotal:number

    @ManyToOne(()=>User,(user)=>user.orders,{nullable:false,eager:true,cascade:false})
    user:User

    @OneToOne(()=>Basket,basket=>basket.order,{nullable:false,eager:true,cascade:["insert","remove","update"]})
    basket: Basket

    @Column({type:'enum',enum:OrderStatus,default:OrderStatus.PENDING})
    status:OrderStatus

    @Column({default:"offline",nullable:false}) // we only support offline payments as per requirements
    paymentMethod: string
}
