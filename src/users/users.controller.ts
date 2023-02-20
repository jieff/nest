import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from './user/user'
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {}

    @Get()
    async getAll(): Promise<User[]> {
        return this.usersService.getAll();
    }

    @Post()
    async create(@Body() user: User): Promise<User> {
        return this.usersService.create(user);
    }

    @Get(':id')
    async getForId(@Param('id') id: string): Promise<User> {
        return this.usersService.getForId(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() userUpdate: User ): Promise<User> {
        return this.usersService.update(id, userUpdate);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<User>{
        return this.usersService.remove(id);
    }
}
