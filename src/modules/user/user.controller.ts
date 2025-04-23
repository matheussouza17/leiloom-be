import { Body, Controller, Post, Get, Patch, Delete, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
    async create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
    }

  @Get()
    async findAll() {
    return this.userService.findAll();
    }

  @Get(':id')
    async findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
    }

  @Patch(':id')
    async update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.update(id, dto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
    return this.userService.remove(id);
    }


}
