import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Wish } from './wish/wish'
import { WishesService } from './wishes.service';

@Controller('wishes')
export class WishesController {
    constructor(
        private readonly wishesService: WishesService
    ) {}

    //teste 1 2
    @Get()
    async getAll(): Promise<Wish[]> {
      return this.wishesService.getAll();
    }
  
    @Post()
    async criar(@Body() wish: Wish): Promise<Wish> {
      return this.wishesService.create(wish);
    }
  
    @Get(':id')
    async buscarPorId(@Param('id') id: string): Promise<Wish> {
      return this.wishesService.getForId(id);
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() wishUpdate: Wish): Promise<Wish> {
      return this.wishesService.update(id, wishUpdate);
    }

  
    @Delete(':id')
    async remove(@Param('id') id: string): Promise<Wish> {
      return this.wishesService.remove(id);
    }

}
