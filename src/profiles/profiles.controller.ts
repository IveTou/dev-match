import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto.js';
import { UpdateProfileDto } from './dto/update-profile.dt.js';
import { ProfilesService } from './profiles.service.js';

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
    getById(@Param('id') id: string) {
        return this.profilesService.findById(id);
    }

    //POST /profiles
    @Post()
    create(@Body() createProfileDto: CreateProfileDto) {
        return this.profilesService.create(createProfileDto);
    }

    //PUT /profiles/:id
    @Put(':id')
    update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
        try {
            return this.profilesService.update(id, updateProfileDto);
        } catch (error: any) {
            console.error(`Error updating profile ${id}:`, error);
            return { error: 'Failed to update profile', statusCode: error.status, message: error.message };
        }
      
    }

    //DELETE /profiles/:id
    @Delete(':id')
    @HttpCode(204)
    delete(@Param('id') id: string) {
        try {
            this.profilesService.delete(id);
        } catch (error: any) {
            console.error(`Error deleting profile ${id}:`, error);
        }
    }
}
