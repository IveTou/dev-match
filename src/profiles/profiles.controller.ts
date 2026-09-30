import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto.js';

// Routes the request to the appropriate handler
@Controller('profiles')
export class ProfilesController {
    @Get()
    getAll(@Query('name') name: string, @Query('description') description: string) {
        return [{ name, description }];
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return { id } ;
    }

    @Post()
    create(@Body() createProfileDto: CreateProfileDto) {
        return {
            name: createProfileDto.name,
            description: createProfileDto.description,
        };
        //return the DTO object
        //return createProfileDto;
    }
}
