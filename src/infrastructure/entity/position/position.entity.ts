import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('position')
export class PositionEntity {
    @PrimaryGeneratedColumn()
    ID: number
    @Column({
        unique: true,
        type: 'varchar',
    })
    name: string
}