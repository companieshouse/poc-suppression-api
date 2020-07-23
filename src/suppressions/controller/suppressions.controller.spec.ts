import {Test, TestingModule} from '@nestjs/testing';
import {SuppressionsController} from './suppressions.controller';
import {SuppressionsService} from '../service/suppressions.service';
import {Suppression} from "../schemas/suppression.schema";
import {getModelToken} from "@nestjs/mongoose";
import {PaymentResponseDto} from "../dto/payment-response.dto";

describe('SuppressionController', () => {
    let suppressionController: SuppressionsController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [SuppressionsController],
            providers: [SuppressionsService, {
                provide: getModelToken(Suppression.name),
                useValue: 'suppressionModel',
            }],
        }).compile();

        suppressionController = app.get<SuppressionsController>(SuppressionsController);
    });

    describe('retrieve suppressions', () => {
        it('should return suppression', () => {
            expect(suppressionController.getSuppression('123', 'testUser', '1', '1'))
                .toStrictEqual(new PaymentResponseDto());
        });
    });
});
