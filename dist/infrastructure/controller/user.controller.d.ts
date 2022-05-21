/// <reference types="multer" />
import { Logger } from "@nestjs/common";
import { UserRegistrationDto } from "../dto/user-registration.dto";
import { IUserAdapter } from "../../domain/port/user-adapter.interface";
export declare class UserController {
    private readonly userAdapter;
    logger: Logger;
    constructor(userAdapter: IUserAdapter);
    userRegistration(registrationParams: UserRegistrationDto, file: Express.Multer.File, req: any): Promise<{
        success: boolean;
        user_id: number;
        message: string;
    }>;
    getUserById(user_id: number): Promise<{
        user: import("../entity/user/user.interface").IUser;
    }>;
    getUserPagination(page: number, count: number): Promise<import("../interface/user-pagination.interface").IUserPagination>;
}
