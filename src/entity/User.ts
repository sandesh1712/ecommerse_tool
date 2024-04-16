import { Entity, PrimaryGeneratedColumn, Column, Tree } from "typeorm"
import { UserRole } from "../types/user"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

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
}
