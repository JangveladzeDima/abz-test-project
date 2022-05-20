import { IPosition } from "../../infrastructure/entity/position/position.interface";
export interface IPositionAdapter {
    getAll(): Promise<IPosition[]>;
}
