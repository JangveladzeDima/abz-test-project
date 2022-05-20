import { IsNotEmpty, IsNumber, IsString, Matches, MaxLength, MinLength } from "class-validator";
import * as buffer from "buffer";
import { Multer } from "multer";

const emailRegex = /^(?:[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
const phoneRegex = /^[\+]{0,1}380([0-9]{9})$/

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
    positionID: string
    photo?: Express.Multer.File
}