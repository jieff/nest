import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Upload, UploadSchema } from './upload/upload';
import { UploadsService } from './uploads.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Upload.name,
                schema: UploadSchema
            }
        ])
],
exports: [],
controllers: [],
providers: [UploadsService]
})

export class UploadsModule {}
