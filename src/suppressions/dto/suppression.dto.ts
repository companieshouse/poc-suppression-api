import {IsObject, IsString} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";
import {AddressDto} from "./address.dto";
import {DocumentDto} from "./document.dto";

export class SuppressionDto {
    @IsString()
    @ApiProperty()
    fullName: string;
    @IsString()
    @ApiProperty()
    email: string;
    @ApiProperty({required: false})
    oldAddress: AddressDto;
    @ApiProperty({required: false})
    newAddress: AddressDto;
    @ApiProperty({required: false})
    document: DocumentDto;
}
