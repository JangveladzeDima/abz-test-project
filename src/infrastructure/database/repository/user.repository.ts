import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { UserEntity } from "../../entity/user/user.entity";
import { Repository } from "typeorm";
import { IUserRepository } from "../port/user-repository.interface";
import { IUser } from "../../entity/user/user.interface";
import { IUserFilter } from "../../interface/user-filter.interface";

@Injectable()
export class UserRepository implements IUserRepository {
    constructor(
        @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
    ) {
    }

    create(user: IUser): Promise<IUser> {
        return this.userRepository.save(user)
    }

    get(filter: IUserFilter): Promise<IUser> {
        return this.userRepository.findOne(filter)
    }
    getAll(): Promise<IUser[]> {
        return this.userRepository.find({})
    }

}