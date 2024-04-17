import { Entity, Column, OneToMany, JoinTable } from "typeorm"
import { UserRole } from "../types/user"
import SuperEntity from "./SuperEntity"
import { Order } from "./Order"
import { Basket } from "./Basket"

@Entity()
export class User extends SuperEntity{

    @Column({nullable:false})
    firstName: string

    @Column({nullable:false})
    lastName: string

    @Column({nullable:false})
    age: number

    @Column({nullable:false,unique: true})
    email: string

    @Column({type:'varchar',length:12,nullable:false})
    phone: string

    @Column({type:'enum',default:UserRole.USER,enum:UserRole})
    role: UserRole

    @Column({type:"varchar",length:100,nullable:false})
    password:string

    @OneToMany(()=>Order,(order)=>order.user)
    @JoinTable()
    orders:Order[];

    @OneToMany(()=>Basket,(basket)=>basket.user,{cascade:["insert", "update","remove" ]})  // despite many to many but we will only have one active basket at a time
    basket:Basket[];

    toJSON(){
        delete this.password;
        return this;
    }
}
