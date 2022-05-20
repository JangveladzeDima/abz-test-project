import { Entity, OneToOne } from "typeorm";
import { PrimaryGeneratedColumn, Column, JoinColumn } from "typeorm";
import { PositionEntity } from "../position/position.entity";

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    ID: number
    @Column({
        type: 'varchar'
    })
    name: string
    @Column({
        type: 'varchar'
    })
    phone: string
    @Column({
        type: 'varchar'
    })
    email: string
    @Column({
        type: 'varchar'
    })
    photo: string
    @Column({
        type: 'integer'
    })
    positionID: number

}
