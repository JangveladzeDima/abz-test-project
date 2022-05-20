import { Inject, Injectable } from "@nestjs/common";
import { ITokenAdapter } from "../port/token-adapter.interface";
import { JwtAuthService } from "../../application/auth/service/service/jwt-auth.service";
import { IJwtAuthService } from "../../application/auth/service/port/jwt--auth-service.interface";

@Injectable()
export class TokenAdapter implements ITokenAdapter {
    constructor(
        @Inject(JwtAuthService) private readonly jwtAuthService: IJwtAuthService
    ) {
    }

    async createToken(): Promise<string> {
        const token = await this.jwtAuthService.login({ time: 1 })
        return token.access_token
    }
}