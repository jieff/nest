import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { Upload } from './upload/upload';

@Injectable()
export class UploadsService {

    constructor(
        @InjectModel(Upload.name) private uploadModel: Model<Upload>
      ) {}
    
      async getAll(): Promise<Upload[]> {
        return this.uploadModel.find().exec();
      }
    
      async criar(upload: Upload): Promise<Upload> {
        const uploadCreate = new this.gatoModel(upload);
    
        return uploadCreate.save();
      }
    
      async getForId(id: string): Promise<Upload> {
        return this.uploadModel.findById(id).exec();
      }
    
      async update(id: string, update: Upload): Promise<Upload> {
        return this.uploadModel.findByIdAndUpdate(id, upload).exec();
      }
    
      async remove(id: string) {
        const uploadRemove = this.gatoModel.findOneAndDelete({ _id: id }).exec();
    
        return (await uploadRemove).remove();
      }

}
