import { Module } from "@nestjs/common";
import { UserController } from "./controller/user.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DomainModule } from "../domain/domain.module";
import { TokenController } from "./controller/token.controller";
import { TinyPngModule } from "../application/tinypng/tiny-png.module";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: '127.0.0.1',
            port: 5432,
            username: 'postgres',
            password: 'dikadika007',
            database: 'development-company',
            autoLoadEntities: true,
            synchronize: true
        }),
        DomainModule
    ],
    controllers: [UserController, TokenController]
})
export class InfrastructureModule {
}