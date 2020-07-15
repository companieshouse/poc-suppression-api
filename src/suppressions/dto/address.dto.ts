import {IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class AddressDto {

    @IsString()
    @ApiProperty()
    readonly addressLine1: string;
    @IsString()
    @ApiProperty()
    readonly addressLine2: string;
    @IsString()
    @ApiProperty()
    readonly townOrCity: string;
    @IsString()
    @ApiProperty()
    readonly county: string;
    @IsString()
    @ApiProperty()
    readonly postCode: string;
}
