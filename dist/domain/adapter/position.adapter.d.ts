import { IPositionAdapter } from "../port/position-adapter.interface";
import { IPosition } from "../../infrastructure/entity/position/position.interface";
import { IPositionRepository } from "../../infrastructure/database/port/position-repository.interface";
export declare class PositionAdapter implements IPositionAdapter {
    private readonly positionRepository;
    constructor(positionRepository: IPositionRepository);
    getAll(): Promise<IPosition[]>;
}
