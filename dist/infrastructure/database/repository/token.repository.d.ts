import { TokenEntity } from "../../entity/token/token.entity";
import { Repository } from "typeorm";
import { ITokenRepository } from "../port/token-repository.interface";
import { IToken } from "../../entity/token/token.interface";
import { ITokenFilter } from "../../interface/token-filter.interface";
export declare class TokenRepository implements ITokenRepository {
    private readonly tokenRepository;
    constructor(tokenRepository: Repository<TokenEntity>);
    create(tokenParams: IToken): Promise<IToken>;
    get(filter: ITokenFilter): Promise<IToken>;
}
