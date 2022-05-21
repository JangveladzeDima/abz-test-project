/// <reference types="multer" />
export declare class UserRegistrationDto {
    name: string;
    email: string;
    phone: string;
    position_id: string;
    photo?: Express.Multer.File;
}
