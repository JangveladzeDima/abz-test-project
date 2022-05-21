import {IsNotEmpty, IsString, Matches, MaxLength, MinLength} from "class-validator";
import {emailRegex, phoneRegex} from "../constants/regex";

export class UserRegistrationDto {
    @IsNotEmpty()
    @MaxLength(60)
    @MinLength(2)
    @IsString()
    name: string
    @IsNotEmpty()
    @IsString()
    @Matches(emailRegex)
    email: string
    @IsNotEmpty()
    @IsString()
    @Matches(phoneRegex)
    phone: string
    @IsNotEmpty()
    @IsString()
    position_id: string
    photo?: Express.Multer.File
}