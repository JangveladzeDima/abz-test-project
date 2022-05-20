import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../entity/user/user.entity";
import { PositionEntity } from "../entity/position/position.entity";
import { UserRepository } from "./repository/user.repository";
import { PositionRepository } from "./repository/position.repository";
import { TokenEntity } from "../entity/token/token.entity";
import { TokenRepository } from "./repository/token.repository";

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity, PositionEntity, TokenEntity]),
    ],
    providers: [UserRepository, PositionRepository, TokenRepository],
    exports: [UserRepository, PositionRepository, TokenRepository]
})
export class DatabaseModule {
}