import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class LinksDto {
    @IsString()
    @ApiProperty()
    self: string;
    @IsString()
    @ApiProperty()
    payment: string;
}
