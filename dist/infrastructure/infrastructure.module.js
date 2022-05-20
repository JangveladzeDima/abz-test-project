"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfrastructureModule = void 0;
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./controller/user.controller");
const typeorm_1 = require("@nestjs/typeorm");
const domain_module_1 = require("../domain/domain.module");
const token_controller_1 = require("./controller/token.controller");
let InfrastructureModule = class InfrastructureModule {
};
InfrastructureModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: '127.0.0.1',
                port: 5432,
                username: 'postgres',
                password: 'dikadika007',
                database: 'development-company',
                autoLoadEntities: true,
                synchronize: true
            }),
            domain_module_1.DomainModule
        ],
        controllers: [user_controller_1.UserController, token_controller_1.TokenController]
    })
], InfrastructureModule);
exports.InfrastructureModule = InfrastructureModule;
//# sourceMappingURL=infrastructure.module.js.map