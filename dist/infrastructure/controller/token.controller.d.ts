import { Logger } from "@nestjs/common";
import { ITokenAdapter } from "../../domain/port/token-adapter.interface";
export declare class TokenController {
    private readonly tokenAdapter;
    logger: Logger;
    constructor(tokenAdapter: ITokenAdapter);
    getToken(): Promise<{
        success: boolean;
        token: string;
    }>;
}
