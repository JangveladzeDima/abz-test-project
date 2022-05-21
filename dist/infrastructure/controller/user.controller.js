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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_registration_dto_1 = require("../dto/user-registration.dto");
const user_adapter_1 = require("../../domain/adapter/user.adapter");
const jwt_guard_1 = require("../../application/auth/guard/jwt.guard");
const common_2 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
let UserController = class UserController {
    constructor(userAdapter) {
        this.userAdapter = userAdapter;
        this.logger = new common_1.Logger();
    }
    async userRegistration(registrationParams, file, req) {
        try {
            const token = req.headers['authorization'];
            const user = await this.userAdapter.create(Object.assign(Object.assign({}, registrationParams), { position_id: registrationParams.position_id, photo: file }), token);
            return {
                "success": true,
                "user_id": user.ID,
                "message": "New user successfully registered"
            };
        }
        catch (err) {
            this.logger.error(err);
            throw new common_1.HttpException({
                "success": false,
                message: err.message
            }, err.status);
        }
    }
    async getUserById(user_id) {
        try {
            const user = await this.userAdapter.get({
                ID: user_id
            });
            return {
                user
            };
        }
        catch (err) {
            this.logger.error(err.message);
            throw new common_1.HttpException({
                "success": false,
                message: err.message
            }, err.status);
        }
    }
    async getUserPagination(page, count) {
        try {
            const users = await this.userAdapter.getUserPagination(page, count);
            return users;
        }
        catch (err) {
            this.logger.error(err.message);
            throw new common_1.HttpException({
                "success": false,
                message: err.message
            }, err.status);
        }
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_2.UseInterceptors)((0, platform_express_1.FileInterceptor)('photo')),
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_registration_dto_1.UserRegistrationDto, Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "userRegistration", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('count')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserPagination", null);
UserController = __decorate([
    (0, common_1.Controller)('/users'),
    __param(0, (0, common_1.Inject)(user_adapter_1.UserAdapter)),
    __metadata("design:paramtypes", [Object])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map