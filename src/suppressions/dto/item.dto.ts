import {ApiProperty} from "@nestjs/swagger";

export class ItemDto {

    @ApiProperty()
    readonly description: string;
    @ApiProperty()
    readonly description_identifier: string;
    @ApiProperty()
    readonly description_values: Map<string, string>;
    @ApiProperty()
    readonly product_type: string;
    @ApiProperty()
    readonly amount: string;
    @ApiProperty()
    readonly available_payment_methods: string[];
    @ApiProperty()
    readonly class_of_payment: string[];
    @ApiProperty()
    readonly kind: string;
    @ApiProperty()
    readonly resource_kind: string;
}
