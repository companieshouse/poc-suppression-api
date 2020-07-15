import {IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class DocumentDto {

    @IsString()
    @ApiProperty()
    readonly companyName: string;
    @IsString()
    @ApiProperty()
    readonly companyNumber: string;
    @IsString()
    @ApiProperty()
    readonly type: string;
    @IsString()
    @ApiProperty()
    readonly registrationDate: string;
}
