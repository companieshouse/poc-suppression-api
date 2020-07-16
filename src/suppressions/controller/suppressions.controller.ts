import {
    Body,
    ConflictException,
    Controller,
    Get,
    Headers,
    Param,
    Patch,
    Post
} from '@nestjs/common';
import {SuppressionsService} from '../service/suppressions.service';
import {
    ApiConflictResponse, ApiConsumes,
    ApiCreatedResponse,
    ApiNoContentResponse, ApiOkResponse,
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

        const suppressions: Suppression[] = await this.suppressionsService.findAll(companyNumber);
        if (suppressions && suppressions.length > 0) {
            throw new ConflictException();
        }

        const suppressionResponseDto = await this.suppressionsService.create(suppression);

        console.log(JSON.stringify(suppressionResponseDto));
        return suppressionResponseDto;
    }

    @Patch('/{id}')
    @ApiOperation({summary: 'Update suppression'})
    @ApiNoContentResponse({description: 'No content'})
    updateSuppression(@Headers('ERIC-identity') userId: string,
                      @Headers('ERIC-Authorised-User') authorisedUser: string,
                      @Param('companyNumber') companyNumber: string,
                      @Body() suppression: SuppressionDto): string {
        return this.suppressionsService.update();
    }

    @Get('/{id}')
    @ApiOperation({summary: 'Get suppressions'})
    @ApiOkResponse({description: 'SuppressionModel details', type: Suppression})
    async getSuppression(@Headers('ERIC-identity') userId: string,
                         @Headers('ERIC-Authorised-User') authorisedUser: string,
                         @Param('companyNumber') companyNumber: string,
                         @Param('id') id: string): Promise<Suppression[]> {

        return await this.suppressionsService.findById(id);
    }
}
