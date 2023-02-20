import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Wish extends Document {

    @Prop()
    description: string;
    @Prop()
    status: number;
    @Prop()
    url: string;
    @Prop()
    name: string;

}

export const WishSchema =  SchemaFactory.createForClass(Wish);