import { IPosition } from "../../entity/position/position.interface";
export interface IPositionRepository {
    create(position: IPosition): Promise<IPosition>;
    getAll(): Promise<IPosition[]>;
}
