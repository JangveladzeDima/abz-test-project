import { Inject, Injectable } from "@nestjs/common";
import { IPositionAdapter } from "../port/position-adapter.interface";
import { IPosition } from "../../infrastructure/entity/position/position.interface";
import { PositionRepository } from "../../infrastructure/database/repository/position.repository";
import { IPositionRepository } from "../../infrastructure/database/port/position-repository.interface";

@Injectable()
export class PositionAdapter implements IPositionAdapter {
    constructor(
        @Inject(PositionRepository) private readonly positionRepository: IPositionRepository
    ) {
    }

    getAll(): Promise<IPosition[]> {
        return this.positionRepository.getAll()
    }
}