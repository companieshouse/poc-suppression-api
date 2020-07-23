import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {SuppressionsService} from "./service/suppressions.service";
import {Suppression, SuppressionSchema} from "./schemas/suppression.schema";
import {SuppressionsController} from "./controller/suppressions.controller";
import {PaymentController} from "./controller/payment.controller";

@Module({
    imports: [MongooseModule.forFeature([{name: Suppression.name, schema: SuppressionSchema}])],
    controllers: [SuppressionsController, PaymentController],
    providers: [SuppressionsService],
})
export class SuppressionsModule {
}
