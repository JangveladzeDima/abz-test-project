"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TinyPngService = void 0;
const common_1 = require("@nestjs/common");
const tinify = require("tinify");
tinify.key = '5kBXzKD316MBl32zGFSMkQTdL85qZpf7';
let TinyPngService = class TinyPngService {
    async cropImage(imageBuffer) {
        const source = tinify.fromBuffer(imageBuffer);
        const resized = source.resize({
            method: 'fit',
            width: 70,
            height: 70
        });
        return resized.toBuffer();
    }
};
TinyPngService = __decorate([
    (0, common_1.Injectable)()
], TinyPngService);
exports.TinyPngService = TinyPngService;
//# sourceMappingURL=tiny-png.service.js.map