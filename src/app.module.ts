import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {SuppressionsModule} from "./suppressions/suppressions.module";
import {ConfigModule, ConfigService} from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get<string>('SUPPRESSION_API_MONGODB_URL')
            }),
            inject: [ConfigService],
        }),
        SuppressionsModule,
    ],
})
export class AppModule {
}
