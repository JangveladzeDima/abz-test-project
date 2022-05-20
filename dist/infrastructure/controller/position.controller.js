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
var PositionController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionController = void 0;
const common_1 = require("@nestjs/common");
const position_adapter_1 = require("../../domain/adapter/position.adapter");
let PositionController = PositionController_1 = class PositionController {
    constructor(positionAdapter) {
        this.positionAdapter = positionAdapter;
        this.logger = new common_1.Logger(PositionController_1.name);
    }
    async getAllPosition() {
        try {
            const positions = await this.positionAdapter.getAll();
            return {
                positions
            };
        }
        catch (err) {
            this.logger.error(err.message);
            throw err;
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PositionController.prototype, "getAllPosition", null);
PositionController = PositionController_1 = __decorate([
    (0, common_1.Controller)('positions'),
    __param(0, (0, common_1.Inject)(position_adapter_1.PositionAdapter)),
    __metadata("design:paramtypes", [Object])
], PositionController);
exports.PositionController = PositionController;
//# sourceMappingURL=position.controller.js.map