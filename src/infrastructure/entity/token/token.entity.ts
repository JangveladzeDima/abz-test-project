import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tokens')
export class TokenEntity {
    @PrimaryGeneratedColumn()
    ID: number
    @Column({
        type: 'varchar'
    })
    token: string
}