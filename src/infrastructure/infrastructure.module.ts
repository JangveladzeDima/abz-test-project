import {Module} from "@nestjs/common";
import {UserController} from "./controller/user.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {DomainModule} from "../domain/domain.module";
import {TokenController} from "./controller/token.controller";
import {UserEntity} from "./entity/user/user.entity";
import {PositionEntity} from "./entity/position/position.entity";
import {TokenEntity} from "./entity/token/token.entity";
import {PositionController} from "./controller/position.controller";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DATABASE_HOST,
            port: 5432,
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            extra: {
                ssl: {
                    rejectUnauthorized: false
                }
            },
            entities: [UserEntity, PositionEntity, TokenEntity],
            synchronize: true,
            logging: false
        }),
        DomainModule
    ],
    controllers: [UserController, TokenController, PositionController]
})
export class InfrastructureModule {
}