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
            host: 'ec2-52-18-116-67.eu-west-1.compute.amazonaws.com',//'127.0.0.1',
            port: 5432,
            username: 'dttzsjjaiyxahs',//'postgres',
            password: '3b71271f628582c05d2da0e9a37c0099abcdc3d2e8b348ed179a5af964e1e17a',//'dikadika007',
            database: 'deub5k94jg21rn',//'development-company',
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