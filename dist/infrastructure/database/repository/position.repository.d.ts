import { Repository } from "typeorm";
import { PositionEntity } from "../../entity/position/position.entity";
import { IPositionRepository } from "../port/position-repository.interface";
import { IPosition } from "../../entity/position/position.interface";
export declare class PositionRepository implements IPositionRepository {
    private readonly positionRepository;
    constructor(positionRepository: Repository<PositionEntity>);
    create(position: IPosition): Promise<IPosition>;
    getAll(): Promise<IPosition[]>;
}
