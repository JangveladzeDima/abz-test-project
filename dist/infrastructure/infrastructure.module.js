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
const user_entity_1 = require("./entity/user/user.entity");
const position_entity_1 = require("./entity/position/position.entity");
const token_entity_1 = require("./entity/token/token.entity");
let InfrastructureModule = class InfrastructureModule {
};
InfrastructureModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'ec2-52-18-116-67.eu-west-1.compute.amazonaws.com',
                port: 5432,
                username: 'dttzsjjaiyxahs',
                password: '3b71271f628582c05d2da0e9a37c0099abcdc3d2e8b348ed179a5af964e1e17a',
                database: 'deub5k94jg21rn',
                extra: {
                    ssl: {
                        rejectUnauthorized: false
                    }
                },
                entities: [user_entity_1.UserEntity, position_entity_1.PositionEntity, token_entity_1.TokenEntity],
                synchronize: true,
                logging: false
            }),
            domain_module_1.DomainModule
        ],
        controllers: [user_controller_1.UserController, token_controller_1.TokenController]
    })
], InfrastructureModule);
exports.InfrastructureModule = InfrastructureModule;
//# sourceMappingURL=infrastructure.module.js.map