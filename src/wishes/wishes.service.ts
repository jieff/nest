import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wish } from './wish/wish'

@Injectable()

export class WishesService{
    constructor(
        @InjectModel(Wish.name) private wishModel: Model<Wish>
    ) {}
    async getAll(): Promise<Wish[]> {
        return this.wishModel.find().exec();
      }
    
      async create(wish: Wish): Promise<Wish> {
        const wishCreate = new this.wishModel(wish);
    
        return wishCreate.save();
      }
    
      async getForId(id: string): Promise<Wish> {
        return this.wishModel.findById(id).exec();
      }
    
      async update(id: string, wish: Wish): Promise<Wish> {
        return this.wishModel.findByIdAndUpdate(id, wish).exec();
      }
    
      async remove(id: string) {
        const wishRemove = this.wishModel.findOneAndDelete({ _id: id }).exec();
    
        return (await wishRemove).remove();
      }
}



