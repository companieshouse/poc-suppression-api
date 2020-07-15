import {ApiProperty} from "@nestjs/swagger";

export class ItemDto {

    @ApiProperty()
    readonly description: string;
    @ApiProperty()
    readonly descriptionIdentifier: string;
    @ApiProperty()
    readonly descriptionValues: string;
    @ApiProperty()
    readonly productTypes: string;
    @ApiProperty()
    readonly amount: string;
    @ApiProperty()
    readonly availablePaymentMethods: string[];
    @ApiProperty()
    readonly classOfPayment: string[];
    @ApiProperty()
    readonly kind: string;
    @ApiProperty()
    readonly resourceKind: string;
}
