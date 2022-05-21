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
    Get, Param, Query

} from "@nestjs/common";
import {UserRegistrationDto} from "../dto/user-registration.dto";
import {UserAdapter} from "../../domain/adapter/user.adapter";
import {IUserAdapter} from "../../domain/port/user-adapter.interface";
import {JwtAuthGuard} from "../../application/auth/guard/jwt.guard";
import {UseInterceptors} from "@nestjs/common";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('/users')
export class UserController {
    logger = new Logger()

    constructor(
        @Inject(UserAdapter) private readonly userAdapter: IUserAdapter,
    ) {
    }

    @UseGuards(JwtAuthGuard)
    @UseInterceptors(FileInterceptor('photo'))
    @Post('')
    async userRegistration(
        @Body() registrationParams: UserRegistrationDto,
        @UploadedFile() file: Express.Multer.File,
        @Req() req
    ) {
        try {
            const token = req.headers['authorization']
            const user = await this.userAdapter.create({
                ...registrationParams,
                position_id: registrationParams.position_id,
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

    @Get('')
    async getUserPagination(
        @Query('page') page: number,
        @Query('count') count: number
    ) {
        try {
            const users = await this.userAdapter.getUserPagination(page, count)
            return users
        } catch (err) {
            this.logger.error(err.message)
            throw new HttpException({
                "success": false,
                message: err.message
            }, err.status)
        }
    }
}