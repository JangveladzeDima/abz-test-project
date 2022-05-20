import { BadRequestException, HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { IUserAdapter } from "../port/user-adapter.interface";
import { IUser } from "../../infrastructure/entity/user/user.interface";
import { UserRepository } from "../../infrastructure/database/repository/user.repository";
import { IUserRepository } from "../../infrastructure/database/port/user-repository.interface";
import { UserRegistrationDto } from "../../infrastructure/dto/user-registration.dto";
import { S3Service } from "../../application/aws/s3/service/s3-service";
import { IS3Service } from "../../application/aws/s3/port/s3-service.interface";
import { TinyPngService } from "../../application/tinypng/service/tiny-png.service";
import { ITinyPngService } from "../../application/tinypng/port/tiny-png-service.interface";
import { TokenRepository } from "../../infrastructure/database/repository/token.repository";
import { ITokenRepository } from "../../infrastructure/database/port/token-repository.interface";
import { IUserFilter } from "../../infrastructure/interface/user-filter.interface";

@Injectable()
export class UserAdapter implements IUserAdapter {
    constructor(
        @Inject(UserRepository) private readonly userRepository: IUserRepository,
        @Inject(S3Service) private readonly s3Service: IS3Service,
        @Inject(TinyPngService) private readonly tinyPngService: ITinyPngService,
        @Inject(TokenRepository) private readonly tokenRepository: ITokenRepository
    ) {
    }


    async create(userParams: UserRegistrationDto, token): Promise<IUser> {
        const parseToken = token.split(' ')[1]
        const deleteToken = await this.tokenRepository.get({
            token: parseToken
        })
        if (deleteToken) {
            throw new HttpException('The token expired.', HttpStatus.UNAUTHORIZED)
        }
        const userByEmail = await this.userRepository.get({
            email: userParams.email
        })
        const userByPhone = await this.userRepository.get({
            phone: userParams.phone
        })
        if (userByEmail !== null || userByPhone !== null) {
            throw new HttpException('User with this phone or email already exist', HttpStatus.CONFLICT)
        }
        const cropPhoto = await this.tinyPngService.cropImage(userParams.photo.buffer)
        const cropPhotoInBuffer = Buffer.from(new Uint8Array(cropPhoto));
        const logo = await this.s3Service.uploadFile({
            file: cropPhotoInBuffer,
            filename: userParams.email
        })
        await this.tokenRepository.create({ token: parseToken })
        return this.userRepository.create({
            ...userParams,
            positionID: Number(userParams.positionID),
            photo: logo
        })
    }

    async get(filter: IUserFilter): Promise<IUser> {
        const user = await this.userRepository.get(filter)
        if (!user) {
            throw new HttpException('The user with the requested identifier does not exist', HttpStatus.NOT_FOUND)
        }
        return user
    }
}