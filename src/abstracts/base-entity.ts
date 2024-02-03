import { createId } from "@paralleldrive/cuid2";
import { z } from "zod";

import { logger } from "@/utils/logger";

export type EntityId = string;

export interface BaseEntityData {
    id: EntityId;
    createdAt: Date;
    updatedAt: Date;
}

export type CreateEntityData<EntityProps = unknown> =
    Partial<BaseEntityData> & {
        props: EntityProps;
    };

export abstract class BaseEntity<EntityProps> {
    // Base Entity Properties
    private readonly id: EntityId;
    private readonly _createdAt: Date;
    private _updatedAt: Date;

    private readonly _props: EntityProps;

    constructor(data: CreateEntityData<EntityProps>) {
        logger.debug("Creating base entity", data);

        this.id = data.id || createId();
        const now = new Date();
        this._createdAt = data.createdAt || now;
        this._updatedAt = data.updatedAt || now;

        logger.debug("Validating base entity properties", this);
        this.validateBase();

        logger.debug("Validating entity properties", data.props);
        this.validateProps(data.props);
        this._props = data.props;

        this.validate();
    }

    get createdAt() {
        return this._createdAt;
    }

    get updatedAt() {
        return this._updatedAt;
    }

    get props(): BaseEntityData & EntityProps {
        return {
            id: this.id,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            ...this._props,
        };
    }

    protected validateBase(): void {
        // Validate ID is a CUID
        const idValidation = z.string().min(1).cuid2();
        try {
            idValidation.parse(this.id);
        } catch (error) {
            if (error instanceof z.ZodError) {
                throw new Error(`Invalid ID: ${error.message}`);
            }
        }

        // Validate createdAt and updatedAt is a date and not in the future
        const dateValidation = z.date().refine((date) => {
            return date <= new Date();
        });

        try {
            dateValidation.parse(this.createdAt);
            dateValidation.parse(this.updatedAt);
        } catch (error) {
            if (error instanceof z.ZodError) {
                throw new Error(`Invalid Date: ${error.message}`);
            }
        }
    }

    private validateProps(data: EntityProps): void {
        // Validate props is an object and less than 12 keys
        const propsValidation = z
            .object({
                ...Object.keys(data as Record<string, unknown>).reduce<
                    Record<string, z.ZodAny>
                >((acc, key) => {
                    acc[key] = z.any();
                    return acc;
                }, {}),
            })
            .refine((props) => {
                return Object.keys(props).length <= 12;
            });

        try {
            propsValidation.parse(data);
        } catch (error) {
            if (error instanceof z.ZodError) {
                throw new Error(`Invalid Props: ${error.message}`);
            }
        }
    }

    protected abstract validate(): void;
}
