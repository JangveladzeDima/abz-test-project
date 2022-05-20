"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_guard_1 = require("./guard/jwt.guard");
const jwt_1 = require("@nestjs/jwt");
const jwt_auth_service_1 = require("./service/service/jwt-auth.service");
const jwt_strategy_1 = require("./strategy/jwt.strategy");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: 'racxa',
                signOptions: { expiresIn: '24000000' },
            }),
        ],
        providers: [jwt_guard_1.JwtAuthGuard, jwt_auth_service_1.JwtAuthService, jwt_strategy_1.JwtStrategy],
        exports: [jwt_auth_service_1.JwtAuthService]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map