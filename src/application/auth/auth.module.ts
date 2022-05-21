import { Module } from "@nestjs/common";
import { JwtAuthGuard } from "./guard/jwt.guard";
import { JwtModule } from "@nestjs/jwt";
import { JwtAuthService } from "./service/service/jwt-auth.service";
import { JwtStrategy } from "./strategy/jwt.strategy";

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.SECRET,
            signOptions: { expiresIn: process.env.TIME },
        }),
    ],
    providers: [JwtAuthGuard, JwtAuthService, JwtStrategy],
    exports: [JwtAuthService]
})
export class AuthModule {
}