import {
    Body,
    ConflictException,
    Controller,
    Get,
    Headers, NotFoundException,
    Param,
    Post
} from '@nestjs/common';
import {SuppressionsService} from '../service/suppressions.service';
import {
    ApiConflictResponse, ApiConsumes,
    ApiCreatedResponse, ApiNotFoundResponse,
    ApiOkResponse,
    ApiOperation,
    ApiTags
} from "@nestjs/swagger";
import {SuppressionDto} from "../dto/suppression.dto";
import {SuppressionResponseDto} from "../dto/suppression-response.dto";
import {Suppression} from "../schemas/suppression.schema";

@ApiTags('Suppression')
@Controller('/companies/:companyNumber/suppressions')
export class SuppressionsController {
    constructor(private readonly suppressionsService: SuppressionsService) {
    }

    @Post()
    @ApiOperation({summary: 'Create suppression'})
    @ApiConsumes('Application/json')
    @ApiCreatedResponse({description: 'SuppressionModel created', type: SuppressionResponseDto})
    @ApiConflictResponse({description: 'SuppressionModel already exists'})
    async createSuppression(@Headers('ERIC-identity') userId: string,
                            @Headers('ERIC-Authorised-User') authorisedUser: string,
                            @Param('companyNumber') companyNumber: string,
                            @Body() suppression: SuppressionDto): Promise<SuppressionResponseDto> {
        //
        // if (userId === null) {
        //     throw new ForbiddenException();
        // }

        console.log(`POST /companies/${companyNumber}/suppressions`);

        const suppressions: Suppression[] = await this.suppressionsService.findByCompanyNumber(companyNumber);
        if (suppressions && suppressions.length > 0) {
            throw new ConflictException();
        }

        return await this.suppressionsService.create(suppression);
    }

    @Get('/:id')
    @ApiOperation({summary: 'Get suppressions'})
    @ApiOkResponse({description: 'SuppressionModel details', type: SuppressionDto})
    @ApiNotFoundResponse({description: 'suppressionNotFound'})
    async getSuppression(@Headers('ERIC-identity') userId: string,
                         @Headers('ERIC-Authorised-User') authorisedUser: string,
                         @Param('companyNumber') companyNumber: string,
                         @Param('id') id: string): Promise<SuppressionDto> {

        console.log(`GET /companies/${companyNumber}/suppressions/${id}`);
        const suppressions: Suppression[] = await this.suppressionsService.findAll();

        for (const s of suppressions) {
            if (s._id.toString() === id) {
                const suppressionDto: SuppressionDto = new SuppressionDto();
                suppressionDto.fullName = s.fullName;
                suppressionDto.email = s.email;
                return suppressionDto;
            }
        }
        throw new NotFoundException();
    }
}
