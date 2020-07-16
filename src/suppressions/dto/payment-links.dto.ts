import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class PaymentLinksDto {
    @IsString()
    @ApiProperty()
    self: string;
    @IsString()
    @ApiProperty()
    suppressionRequest: string;
}
