import {IUser} from "../../infrastructure/entity/user/user.interface";
import {UserRegistrationDto} from "../../infrastructure/dto/user-registration.dto";
import {IUserFilter} from "../../infrastructure/interface/user-filter.interface";
import {IUserPagination} from "../../infrastructure/interface/user-pagination.interface";

export interface IUserAdapter {
    create(userParams: UserRegistrationDto, token: string): Promise<IUser>

    get(filter: IUserFilter): Promise<IUser>

    getUserPagination(page: number, count: number): Promise<IUserPagination>
}