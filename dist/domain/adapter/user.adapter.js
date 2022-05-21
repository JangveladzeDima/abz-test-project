"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAdapter = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("../../infrastructure/database/repository/user.repository");
const s3_service_1 = require("../../application/aws/s3/service/s3-service");
const tiny_png_service_1 = require("../../application/tinypng/service/tiny-png.service");
const token_repository_1 = require("../../infrastructure/database/repository/token.repository");
let UserAdapter = class UserAdapter {
    constructor(userRepository, s3Service, tinyPngService, tokenRepository) {
        this.userRepository = userRepository;
        this.s3Service = s3Service;
        this.tinyPngService = tinyPngService;
        this.tokenRepository = tokenRepository;
    }
    async create(userParams, token) {
        const parseToken = token.split(' ')[1];
        const deleteToken = await this.tokenRepository.get({
            token: parseToken
        });
        if (userParams.photo.mimetype !== 'image/jpeg') {
            throw new common_1.HttpException('file should by image/jpeg format', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        if (deleteToken) {
            throw new common_1.HttpException('The token expired.', common_1.HttpStatus.UNAUTHORIZED);
        }
        const userByEmail = await this.userRepository.get({
            email: userParams.email
        });
        const userByPhone = await this.userRepository.get({
            phone: userParams.phone
        });
        if (userByEmail !== null || userByPhone !== null) {
            throw new common_1.HttpException('User with this phone or email already exist', common_1.HttpStatus.CONFLICT);
        }
        const cropPhoto = await this.tinyPngService.cropImage(userParams.photo.buffer);
        const cropPhotoInBuffer = Buffer.from(new Uint8Array(cropPhoto));
        const logo = await this.s3Service.uploadFile({
            file: cropPhotoInBuffer,
            filename: userParams.email
        });
        await this.tokenRepository.create({ token: parseToken });
        return this.userRepository.create(Object.assign(Object.assign({}, userParams), { positionID: Number(userParams.position_id), photo: logo }));
    }
    async get(filter) {
        const user = await this.userRepository.get(filter);
        if (!user) {
            throw new common_1.HttpException('The user with the requested identifier does not exist', common_1.HttpStatus.NOT_FOUND);
        }
        return user;
    }
    async getUserPagination(page, count) {
        if (page < 1) {
            throw new common_1.HttpException('The page must be at least 1.', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        if (count < 1 || count > 100) {
            throw new common_1.HttpException('The page must be at least 1 and less 100', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        const users = await this.userRepository.getAll();
        const total_users = users.length;
        const total_pages = Math.round(total_users / count);
        let next_url = null;
        if (total_pages !== page) {
            next_url = 'https://protected-spire-02667.herokuapp.com/users/' + `page=${page + 1}&count=${count}`;
        }
        let prev_url = null;
        if (page - 1 >= 1) {
            prev_url = 'https://protected-spire-02667.herokuapp.com/users/' + `page=${page - 1}&count=${count}`;
        }
        const links = {
            next_url,
            prev_url
        };
        return {
            page,
            total_pages,
            total_users,
            count,
            links,
            users
        };
    }
};
UserAdapter = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(user_repository_1.UserRepository)),
    __param(1, (0, common_1.Inject)(s3_service_1.S3Service)),
    __param(2, (0, common_1.Inject)(tiny_png_service_1.TinyPngService)),
    __param(3, (0, common_1.Inject)(token_repository_1.TokenRepository)),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], UserAdapter);
exports.UserAdapter = UserAdapter;
//# sourceMappingURL=user.adapter.js.map