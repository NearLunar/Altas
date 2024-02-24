import { z } from "zod";

import { BaseEntity } from "@/abstracts/base-entity";

export enum UserRole {
    ADMIN = "admin",
    USER = "user",
}

export interface UserEntityProps {
    name: string;
    email: string;
    password: string;
    role: UserRole;
}

export class UserEntity extends BaseEntity<UserEntityProps> {
    validate(): void {
        // Validate name
        const nameValidation = z.string().min(1).max(255);
        try {
            nameValidation.parse(this.props.name);
        } catch (error) {
            if (error instanceof z.ZodError) {
                throw new Error(`Invalid Name: ${error.message}`);
            }
        }

        // Validate email
        const emailValidation = z.string().min(1).email();
        try {
            emailValidation.parse(this.props.email);
        } catch (error) {
            if (error instanceof z.ZodError) {
                throw new Error(`Invalid Email: ${error.message}`);
            }
        }

        // Validate password
        const passwordValidation = z.string().min(1).max(255);
        try {
            passwordValidation.parse(this.props.password);
        } catch (error) {
            if (error instanceof z.ZodError) {
                throw new Error(`Invalid Password: ${error.message}`);
            }
        }
    }
}
