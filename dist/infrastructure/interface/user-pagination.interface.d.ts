import { IUser } from "../entity/user/user.interface";
export interface IUserPagination {
    page: number;
    total_pages: number;
    total_users: number;
    count: number;
    links: {
        next_url: string;
        prev_url: string;
    };
    users: IUser[];
}
