import { Column, PrimaryGeneratedColumn } from "typeorm";

export default abstract class SuperEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({default:new Date().toISOString()})
    createdAt:string;
}
