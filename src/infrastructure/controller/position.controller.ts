import { Controller, Get, Inject, Injectable, Logger } from "@nestjs/common";
import { PositionAdapter } from "../../domain/adapter/position.adapter";
import { IPositionAdapter } from "../../domain/port/position-adapter.interface";

@Controller('positions')
export class PositionController {
    logger = new Logger(PositionController.name)

    constructor(
        @Inject(PositionAdapter) private readonly positionAdapter: IPositionAdapter
    ) {
    }

    @Get()
    async getAllPosition() {
        try {
            const positions = await this.positionAdapter.getAll()
            return {
                positions
            }
        } catch (err) {
            this.logger.error(err.message)
            throw err
        }
    }
}