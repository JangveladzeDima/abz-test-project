"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../infrastructure/database/database.module");
const user_adapter_1 = require("./adapter/user.adapter");
const token_adapter_1 = require("./adapter/token.adapter");
const auth_module_1 = require("../application/auth/auth.module");
const aws_s3_module_1 = require("../application/aws/s3/aws-s3.module");
const tiny_png_module_1 = require("../application/tinypng/tiny-png.module");
const position_adapter_1 = require("./adapter/position.adapter");
let DomainModule = class DomainModule {
};
DomainModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            auth_module_1.AuthModule,
            aws_s3_module_1.AwsS3Module,
            tiny_png_module_1.TinyPngModule
        ],
        providers: [user_adapter_1.UserAdapter, token_adapter_1.TokenAdapter, position_adapter_1.PositionAdapter],
        exports: [user_adapter_1.UserAdapter, token_adapter_1.TokenAdapter, position_adapter_1.PositionAdapter]
    })
], DomainModule);
exports.DomainModule = DomainModule;
//# sourceMappingURL=domain.module.js.map