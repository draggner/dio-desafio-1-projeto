import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigurationsModule } from "src/configurations/configuration.module";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigurationsModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: 'mysql',
                host: configService.get('DATABASE_HOST'),
                port: configService.get<number>('DATABASE_PORT'),
                username: configService.get('DATABASE_USERNAME'),
                password: configService.get('DATABASE_PASSWORD'),
                database: configService.get('DATABASE_NAME'),
                synchronize: configService.get<boolean>('DATABASE_SYNC', true),
                autoLoadEntities: configService.get<boolean>('DATABASE_AUTO_LOAD_ENTITIES', true),
                logging: ['error'],
            }),
        })
    ],
})
export class DatabasesModule { }
