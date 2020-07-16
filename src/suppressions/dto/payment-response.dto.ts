import {ItemDto} from "./item.dto";
import {ApiProperty} from "@nestjs/swagger";
import {PaymentLinksDto} from "./payment-links.dto";

export class PaymentResponseDto {

    @ApiProperty()
    etag: string;
    @ApiProperty()
    kind: string;
    @ApiProperty()
    links: PaymentLinksDto;
    @ApiProperty()
    items: ItemDto[];
}
