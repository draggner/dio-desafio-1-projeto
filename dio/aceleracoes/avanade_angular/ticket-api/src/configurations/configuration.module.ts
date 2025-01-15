import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            expandVariables: true,
            envFilePath: ['.env', '.dev.env']
        }),
    ],
    exports: [ConfigService],
    providers: [ConfigService],
})
export class ConfigurationsModule { }