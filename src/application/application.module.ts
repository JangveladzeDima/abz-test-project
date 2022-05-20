import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { AwsModule } from "./aws/aws.module";

@Module({
    imports: [
        AuthModule,
        AwsModule
    ]
})
export class ApplicationModule {
}