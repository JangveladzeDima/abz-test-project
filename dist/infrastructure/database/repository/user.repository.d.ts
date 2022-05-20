import { UserEntity } from "../../entity/user/user.entity";
import { Repository } from "typeorm";
import { IUserRepository } from "../port/user-repository.interface";
import { IUser } from "../../entity/user/user.interface";
import { IUserFilter } from "../../interface/user-filter.interface";
export declare class UserRepository implements IUserRepository {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    create(user: IUser): Promise<IUser>;
    get(filter: IUserFilter): Promise<IUser>;
}
