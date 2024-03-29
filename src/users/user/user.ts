import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document{

    @Prop()
    name: string;

    @Prop()
    lastname: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    phone: string;

    @Prop()
    status: number;

    @Prop()
    privileges: number;

}


export const UserSchema = SchemaFactory.createForClass(User);