import { Entity, PrimaryGeneratedColumn, Column, Tree, OneToMany } from "typeorm"
import { UserRole } from "../types/user"
import SuperEntity from "./SuperEntity"
import { Order } from "./Order"
import { Basket } from "./Basket"

@Entity()
export class User extends SuperEntity{

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @Column({nullable:false,unique: true})
    email: string

    @Column({type:'varchar',length:12,nullable:false})
    phone: string

    @Column({type:'enum',default:UserRole.USER,enum:UserRole})
    role: UserRole

    @OneToMany(()=>Order,(order)=>order.user)
    orders:Order[];

    @OneToMany(()=>Basket,(basket)=>basket.user)  // despite many to many but we will only have one active basket at a time
    basket:Basket[];
}
