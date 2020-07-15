import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

@Schema()
export class Suppression extends Document {
    @Prop({ required: true} )
    name: string;

    @Prop({ required: true} )
    email: string;

    @Prop({ required: true} )
    companyNumber: string;
}

export const SuppressionSchema = SchemaFactory.createForClass(Suppression);
