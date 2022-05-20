/// <reference types="multer" />
export declare class UserRegistrationDto {
    name: string;
    email: string;
    phone: string;
    positionID: string;
    photo?: Express.Multer.File;
}
