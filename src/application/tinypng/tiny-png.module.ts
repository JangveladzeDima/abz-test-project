import { Module } from "@nestjs/common";
import { TinyPngService } from "./service/tiny-png.service";

@Module({
    providers: [TinyPngService],
    exports: [TinyPngService]
})
export class TinyPngModule {
}