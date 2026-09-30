import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto.js';
import { UpdateProfileDto } from './dto/update-profile.dt.js';
import { ProfilesService } from './profiles.service.js';

// Routes the request to the appropriate handler
@Controller('profiles')
export class ProfilesController {
    constructor(private readonly profilesService: ProfilesService) {
        
    }
    @Get()
    getAll(@Query('name') name: string, @Query('description') description: string) {
        return this.profilesService.findAll();
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

    @Put(':id')
    update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
        return {
            id,
            ...updateProfileDto,
        };
    }

    @Delete(':id')
    @HttpCode(204)
    delete(@Param('id') id: string) {
        return {
            id,
        };
    }
}
