import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user/user'


@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>
    ) {}

    async getAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async create(user: User): Promise<User> {
        const userCreate = new this.userModel(user);

        return userCreate.save();
    }

    async getForId(id: string): Promise<User> {
        return this.userModel.findById(id).exec();
    }

    
    async update(id: string, user: User): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, user).exec();
    }

    async remove(id: string){

        const userRemove = this.userModel.findOneAndDelete({ _id: id}).exec();

        return (await userRemove).remove();


    }

}
