import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import type{ CreateProfileDto } from './dto/create-profile.dto.js';
import { UpdateProfileDto } from './dto/update-profile.dt.js';
// @Injectable() Enables our service to create a instance of the service or reuse it in other parts of the application
//You don't need to create a instance of the service, it will be created automatically by the NestJS framework.
@Injectable()
export class ProfilesService {
    // Usually we use an ORM like Prisma, Drizzle ORM or TypeORM to interact with the database, but for this example we will use an array of objects.
    private profiles = [
        {
            id: randomUUID(),
            name: 'John Doe',
            description: 'John Doe is a software engineer',
        },  
        {
            id: randomUUID(),
            name: 'Jane Doe',
            description: 'Jane Doe is a software engineer',
        },
        {
            id: randomUUID(),
            name: 'Jim Doe',
            description: 'Jim Doe is a software engineer',
        },
    ];

    findAll() {
        return this.profiles;
    }

    // Find a profile by its ID
    findById(id: string) {
        return this.profiles.find((profile) => profile.id === id);
    }

    create(profile: CreateProfileDto) {  // Profile is a DTO object
        const newProfile = {
            id: randomUUID(),
            ...profile,
        };
        this.profiles.push(newProfile);
        return newProfile;
    }

    update(id: string, profile: UpdateProfileDto) {
        const index = this.profiles.findIndex((profile) => profile.id === id);
        if (index === -1) {
            throw new NotFoundException('Profile not found');
        }
        this.profiles[index] = {
            ...this.profiles[index],
            ...profile,
        };
        return this.profiles[index];
    }

    delete(id: string) {
        const index = this.profiles.findIndex((profile) => profile.id === id);
        if (index === -1) {
            throw new NotFoundException('Profile not found');
        }
        this.profiles.splice(index, 1);
        return { message: 'Profile deleted successfully' };
    }
}
