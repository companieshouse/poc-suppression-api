import {Body, Controller, Get, Headers, Param, Patch} from "@nestjs/common";
import {ApiNoContentResponse, ApiOkResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
import {Suppression} from "../schemas/suppression.schema";
import {SuppressionsService} from "../service/suppressions.service";
import {PaymentResponseDto} from "../dto/payment-response.dto";
import {PaymentDto} from "../dto/payment.dto";

@ApiTags('Payment')
@Controller('/companies/:companyNumber/suppressions/:id/payment')
export class PaymentController {

    constructor(private readonly suppressionsService: SuppressionsService) {
    }

    @Get()
    @ApiOperation({summary: 'Get payment'})
    @ApiOkResponse({description: 'Payment details', type: PaymentResponseDto})
    async getPayment(@Param('companyNumber') companyNumber: string,
                     @Param('id') id: string): Promise<PaymentResponseDto> {

        const suppressions: Suppression[] = await this.suppressionsService.findById(id);

        const suppression: Suppression = suppressions[0];

        console.log(JSON.stringify(suppression));

        const response: PaymentResponseDto = new PaymentResponseDto();
        response.etag = '123';
        response.kind = 'suppression';
        response.links = {
            self: `/companies/${companyNumber}/suppressions/${id}/payment`,
            suppressionRequest: `/companies/${companyNumber}/suppressions/${id}`
        };
        return response;
    }

    @Patch()
    @ApiOperation({summary: 'Update payment'})
    @ApiNoContentResponse({description: 'No content'})
    updatePayment(@Param('companyNumber') companyNumber: string,
                  @Param('id') id: string,
                  @Body() payment: PaymentDto): void {
        // update payment
        console.log('PATCH /companies/:companyNumber/suppressions/:id/payment - TO-DO')
    }
}
