"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entity/user/user.entity");
const position_entity_1 = require("../entity/position/position.entity");
const user_repository_1 = require("./repository/user.repository");
const position_repository_1 = require("./repository/position.repository");
const token_entity_1 = require("../entity/token/token.entity");
const token_repository_1 = require("./repository/token.repository");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity, position_entity_1.PositionEntity, token_entity_1.TokenEntity]),
        ],
        providers: [user_repository_1.UserRepository, position_repository_1.PositionRepository, token_repository_1.TokenRepository],
        exports: [user_repository_1.UserRepository, position_repository_1.PositionRepository, token_repository_1.TokenRepository]
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map