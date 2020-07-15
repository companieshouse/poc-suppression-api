import { Injectable } from '@nestjs/common/decorators';
import {SuppressionDto} from "../dto/suppression.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Suppression} from "../schemas/suppression.schema";
import {Model} from "mongoose";
import {SuppressionResponseDto} from "../dto/suppression-response.dto";
import {LinksDto} from "../dto/links.dto";

function generateLinks(companyNumber: string, id: string): LinksDto {
  const links: LinksDto = new LinksDto();
  links.self = `companies/${companyNumber}/suppressions/${id}`;
  links.payment = `companies/${companyNumber}/suppressions/${id}/payments`;
  return links;
}

@Injectable()
export class SuppressionsService {

  constructor(@InjectModel(Suppression.name) private suppressionModel: Model<Suppression>) {}

  async create(suppressionDto: SuppressionDto): Promise<SuppressionResponseDto> {

    const suppressionSchema: Suppression = new this.suppressionModel(suppressionDto);
    const suppression: Suppression = await suppressionSchema.save();

    const response: SuppressionResponseDto = new SuppressionResponseDto();
    const id: string = suppression._id;
    response.id = id;
    response.links = generateLinks(suppression.companyNumber, id);

    return response;
  }

  update(): string {
    return 'Hello World!';
  }

  async findAll(companyNumber: string): Promise<Suppression[]> {
    return await this.suppressionModel.find({companyNumber: companyNumber}).exec();
  }
}
