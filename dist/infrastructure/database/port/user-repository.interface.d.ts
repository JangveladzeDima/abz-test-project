import { IUser } from "../../entity/user/user.interface";
import { IUserFilter } from "../../interface/user-filter.interface";
export interface IUserRepository {
    create(user: IUser): Promise<IUser>;
    get(filter: IUserFilter): Promise<IUser>;
    getAll(): Promise<IUser[]>;
}
