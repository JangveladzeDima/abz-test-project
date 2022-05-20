import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PositionEntity } from "../../entity/position/position.entity";
import { IPositionRepository } from "../port/position-repository.interface";
import { IPosition } from "../../entity/position/position.interface";

@Injectable()
export class PositionRepository implements IPositionRepository {
    constructor(
        @InjectRepository(PositionEntity) private readonly positionRepository: Repository<PositionEntity>
    ) {
    }

    create(position: IPosition): Promise<IPosition> {
        return this.positionRepository.save(position)
    }

    getAll(): Promise<IPosition[]> {
        return this.positionRepository.find()
    }


}