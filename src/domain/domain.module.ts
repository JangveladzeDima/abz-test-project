import { Module } from "@nestjs/common";
import { DatabaseModule } from "../infrastructure/database/database.module";
import { UserAdapter } from "./adapter/user.adapter";
import { TokenAdapter } from "./adapter/token.adapter";
import { AuthModule } from "../application/auth/auth.module";
import { AwsS3Module } from "../application/aws/s3/aws-s3.module";
import { TinyPngModule } from "../application/tinypng/tiny-png.module";
import { PositionAdapter } from "./adapter/position.adapter";

@Module({
    imports: [
        DatabaseModule,
        AuthModule,
        AwsS3Module,
        TinyPngModule
    ],
    providers: [UserAdapter, TokenAdapter, PositionAdapter],
    exports: [UserAdapter, TokenAdapter, PositionAdapter]
})
export class DomainModule {
}