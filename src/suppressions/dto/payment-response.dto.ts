import {LinksDto} from "./links.dto";
import {ItemDto} from "./item.dto";
import {ApiProperty} from "@nestjs/swagger";

export class PaymentResponseDto {

    @ApiProperty()
    readonly etag: string;
    @ApiProperty()
    readonly kind: string;
    @ApiProperty()
    readonly links: LinksDto;
    @ApiProperty()
    readonly items: ItemDto[];
}
