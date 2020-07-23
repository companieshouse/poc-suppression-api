import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

@Schema()
export class Suppression extends Document {
    @Prop()
    fullName: string;

    @Prop()
    email: string;

    @Prop()
    companyNumber: string;
}

export const SuppressionSchema = SchemaFactory.createForClass(Suppression);
