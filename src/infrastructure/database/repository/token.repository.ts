import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TokenEntity } from "../../entity/token/token.entity";
import { Repository } from "typeorm";
import { ITokenRepository } from "../port/token-repository.interface";
import { IToken } from "../../entity/token/token.interface";
import { ITokenFilter } from "../../interface/token-filter.interface";

@Injectable()
export class TokenRepository implements ITokenRepository {
    constructor(
        @InjectRepository(TokenEntity) private readonly tokenRepository: Repository<TokenEntity>
    ) {
    }

    create(tokenParams: IToken): Promise<IToken> {
        return this.tokenRepository.save(tokenParams)
    }

    get(filter: ITokenFilter): Promise<IToken> {
        return this.tokenRepository.findOneBy(filter)
    }
}