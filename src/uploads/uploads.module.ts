import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Upload, UploadSchema } from './upload/upload';
import { UploadsService } from './uploads.service';
import { UploadsController } from './uploads.controller';

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
controllers: [UploadsController],
providers: [UploadsService]
})

export class UploadsModule {}
