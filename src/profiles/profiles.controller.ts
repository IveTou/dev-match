import { Body, Controller, Delete, Get, HttpCode, HttpStatus, InternalServerErrorException, NotFoundException, Param, ParseUUIDPipe, Post, Put, Query } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto.js';
import { UpdateProfileDto } from './dto/update-profile.dt.js';
import { ProfilesService } from './profiles.service.js';
import type { UUID } from 'node:crypto';

// Routes the request to the appropriate handler
@Controller('profiles')
export class ProfilesController {
    constructor(private readonly profilesService: ProfilesService) {
        
    }
    //GET /profiles
    @Get()
    getAll(@Query('name') name: string, @Query('description') description: string) {
        return this.profilesService.findAll();
    }

    //GET /profiles/:id
    @Get(':id')
    getById(@Param('id', ParseUUIDPipe) id: UUID) {
        return this.profilesService.findById(id);
    }

    //POST /profiles
    @Post()
    create(@Body() createProfileDto: CreateProfileDto) {
        return this.profilesService.create(createProfileDto);
    }

    //PUT /profiles/:id
    @Put(':id')
    update(@Param('id', ParseUUIDPipe) id: UUID, @Body() updateProfileDto: UpdateProfileDto) {
        try {
            return this.profilesService.update(id, updateProfileDto);
        } catch (error) {
            if (error instanceof Error && error.message.includes('not found')) {
                throw new NotFoundException(error.message);
            }
            throw new InternalServerErrorException('Failed to update profile');
        }
    }

    //DELETE /profiles/:id
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseUUIDPipe) id: UUID) {
        try {   
            this.profilesService.delete(id);
        } catch (error) {
            if (error instanceof Error && error.message.includes('not found')) {
                throw new NotFoundException(error.message);
            }
            throw new InternalServerErrorException('Failed to delete profile');
        }
    }
}
