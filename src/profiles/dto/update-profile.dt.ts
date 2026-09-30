import { IsString, MinLength } from "class-validator";

export class UpdateProfileDto {
    @IsString()
    @MinLength(3, { message: 'Name must be at least 3 characters long' })
    name: string;

    @IsString()
    description: string;
}