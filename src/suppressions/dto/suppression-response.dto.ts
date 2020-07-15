import {IsObject, IsString} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";
import {LinksDto} from "./links.dto";

export class SuppressionResponseDto {
    @IsString()
    @ApiProperty()
    id: string;

    @IsObject()
    @ApiProperty()
    links: LinksDto;
}
