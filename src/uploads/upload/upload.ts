import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Upload extends Document{
    @Prop()
    user: string;

    @Prop()
    description: string;

    @Prop()
    status: number;

    @Prop()
    url: string;

}
export const UploadSchema = SchemaFactory.createForClass(Upload);