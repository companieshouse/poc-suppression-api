import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {SuppressionsModule} from "./suppressions/suppressions.module";

@Module({
  imports: [
      MongooseModule.forRoot('mongodb://localhost/nest'),
      SuppressionsModule,
  ],
})
export class AppModule {}
