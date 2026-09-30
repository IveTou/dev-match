import { Controller, Get, Query } from '@nestjs/common';

// Routes the request to the appropriate handler
@Controller('profiles')
export class ProfilesController {
    @Get()
    getAll(@Query('age') age: number, @Query('location') location: string) {
        return [{ age, location }];
    }
}
