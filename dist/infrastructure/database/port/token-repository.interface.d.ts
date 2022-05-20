import { IToken } from "../../entity/token/token.interface";
import { ITokenFilter } from "../../interface/token-filter.interface";
export interface ITokenRepository {
    create(tokenParams: IToken): Promise<IToken>;
    get(filter: ITokenFilter): Promise<IToken>;
}
