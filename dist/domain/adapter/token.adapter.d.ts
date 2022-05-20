import { ITokenAdapter } from "../port/token-adapter.interface";
import { IJwtAuthService } from "../../application/auth/service/port/jwt--auth-service.interface";
export declare class TokenAdapter implements ITokenAdapter {
    private readonly jwtAuthService;
    constructor(jwtAuthService: IJwtAuthService);
    createToken(): Promise<string>;
}
