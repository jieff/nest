import { Body, Controller, Get, Post, Param, Put, Delete } from '@nestjs/common';
import { Upload } from './upload/upload';
import { UploadsService } from './uploads.service';


@Controller('uploads')
export class UploadsController {

    constructor(
        private readonly uploadsService: UploadsService
    ) {}

    @Get()
    async getAll(): Promise<Upload[]> {
        return this.uploadsService.getAll();
    }

    @Post()
    async create(@Body() user: Upload): Promise<Upload> {
        return this.uploadsService.create(user);
    }

    @Get(':id')
    async getForId(@Param('id') id: string): Promise<Upload> {
        return this.uploadsService.getForId(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() userUpdate: Upload ): Promise<Upload> {
        return this.uploadsService.update(id, userUpdate);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<Upload>{
        return this.uploadsService.remove(id);
    }

}
