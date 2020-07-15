import {IsObject, IsString} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";
import {AddressDto} from "./address.dto";
import {DocumentDto} from "./document.dto";

export class SuppressionDto {
    @IsString()
    @ApiProperty()
    readonly fullName: string;
    @IsString()
    @ApiProperty()
    readonly email: string;
    @IsObject()
    @ApiProperty()
    readonly oldAddress: AddressDto;
    @IsObject()
    @ApiProperty()
    readonly newAddress: AddressDto;
    @IsObject()
    @ApiProperty()
    readonly document: DocumentDto;
}
