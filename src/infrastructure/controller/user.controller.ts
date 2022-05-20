import {
    Body,
    Controller,
    Req,
    HttpException,
    Inject,
    Logger,
    Post,
    UseGuards,
    UploadedFile,
    Get, Param
} from "@nestjs/common";
import { UserRegistrationDto } from "../dto/user-registration.dto";
import { UserAdapter } from "../../domain/adapter/user.adapter";
import { IUserAdapter } from "../../domain/port/user-adapter.interface";
import { JwtAuthGuard } from "../../application/auth/guard/jwt.guard";
import { UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('/users')
export class UserController {
    logger = new Logger()

    constructor(
        @Inject(UserAdapter) private readonly userAdapter: IUserAdapter,
    ) {
    }

    @UseGuards(JwtAuthGuard)
    @UseInterceptors(FileInterceptor('file'))
    @Post('')
    async userRegistration(
        @Body() registrationParams: UserRegistrationDto,
        @UploadedFile() file: Express.Multer.File,
        @Req() req
    ) {
        try {
            this.logger.log(registrationParams)
            this.logger.log(file)
            const token = req.headers['authorization']
            const user = await this.userAdapter.create({
                ...registrationParams,
                positionID: registrationParams.positionID,
                photo: file
            }, token)
            return {
                "success": true,
                "user_id": user.ID,
                "message": "New user successfully registered"
            }
        } catch (err) {
            this.logger.error(err)
            throw new HttpException({
                "success": false,
                message: err.message
            }, err.status)
        }
    }

    @Get(':id')
    async getUserById(@Param('id') user_id: number) {
        try {
            const user = await this.userAdapter.get({
                ID: user_id
            })
            return {
                user
            }
        } catch (err) {
            this.logger.error(err.message)
            throw new HttpException({
                "success": false,
                message: err.message
            }, err.status)
        }
    }
}