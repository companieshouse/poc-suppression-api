import {IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class DocumentDto {

    @IsString()
    @ApiProperty({required: false})
    companyName: string;
    @IsString()
    @ApiProperty()
    companyNumber: string;
    @IsString()
    @ApiProperty({required: false})
    type: string;
    @IsString()
    @ApiProperty({required: false})
    registrationDate: string;
}
