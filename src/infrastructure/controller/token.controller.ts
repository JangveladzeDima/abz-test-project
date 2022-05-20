import { Controller, Get, Inject, Logger } from "@nestjs/common";
import { TokenAdapter } from "../../domain/adapter/token.adapter";
import { ITokenAdapter } from "../../domain/port/token-adapter.interface";
import { TinyPngService } from "../../application/tinypng/service/tiny-png.service";

@Controller('token')
export class TokenController {
    logger = new Logger(TokenController.name)

    constructor(
        @Inject(TokenAdapter) private readonly tokenAdapter: ITokenAdapter,
    ) {
    }

    @Get('')
    async getToken() {
        try {
            const token = await this.tokenAdapter.createToken()
            return {
                "success": true,
                token
            }
        } catch (err) {
            this.logger.error(err.message)
            throw err
        }
    }
}