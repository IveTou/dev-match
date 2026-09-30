import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
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
}
