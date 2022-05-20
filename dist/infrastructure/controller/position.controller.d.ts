import { Logger } from "@nestjs/common";
import { IPositionAdapter } from "../../domain/port/position-adapter.interface";
export declare class PositionController {
    private readonly positionAdapter;
    logger: Logger;
    constructor(positionAdapter: IPositionAdapter);
    getAllPosition(): Promise<{
        positions: import("../entity/position/position.interface").IPosition[];
    }>;
}
