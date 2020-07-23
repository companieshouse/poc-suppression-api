import {IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class AddressDto {

    @IsString()
    @ApiProperty({required: false})
    addressLine1: string;
    @IsString()
    @ApiProperty({required: false})
    addressLine2: string;
    @IsString()
    @ApiProperty({required: false})
    townOrCity: string;
    @IsString()
    @ApiProperty({required: false})
    county: string;
    @IsString()
    @ApiProperty({required: false})
    postCode: string;
}
