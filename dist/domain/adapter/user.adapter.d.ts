import { IUserAdapter } from "../port/user-adapter.interface";
import { IUser } from "../../infrastructure/entity/user/user.interface";
import { IUserRepository } from "../../infrastructure/database/port/user-repository.interface";
import { UserRegistrationDto } from "../../infrastructure/dto/user-registration.dto";
import { IS3Service } from "../../application/aws/s3/port/s3-service.interface";
import { ITinyPngService } from "../../application/tinypng/port/tiny-png-service.interface";
import { ITokenRepository } from "../../infrastructure/database/port/token-repository.interface";
import { IUserFilter } from "../../infrastructure/interface/user-filter.interface";
import { IUserPagination } from "../../infrastructure/interface/user-pagination.interface";
export declare class UserAdapter implements IUserAdapter {
    private readonly userRepository;
    private readonly s3Service;
    private readonly tinyPngService;
    private readonly tokenRepository;
    constructor(userRepository: IUserRepository, s3Service: IS3Service, tinyPngService: ITinyPngService, tokenRepository: ITokenRepository);
    create(userParams: UserRegistrationDto, token: any): Promise<IUser>;
    get(filter: IUserFilter): Promise<IUser>;
    getUserPagination(page: number, count: number): Promise<IUserPagination>;
}
