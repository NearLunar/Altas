export type EntityId = string;

export interface BaseEntityProps {
    id: EntityId;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateBaseEntityProps<EntityPropsType> {
    id: EntityId;
    props: EntityPropsType;
    createdAt?: Date;
    updatedAt?: Date;
}

export abstract class BaseEntity<EntityPropsType> {
    protected abstract _id: EntityId;
    protected readonly _props: EntityPropsType;
    protected readonly _createdAt: Date;
    protected readonly _updatedAt: Date;

    constructor({
        id,
        props,
        createdAt,
        updatedAt,
    }: CreateBaseEntityProps<EntityPropsType>) {
        this.id = id;
        this._props = props;
        this.validateProps(props);
        this._createdAt = createdAt ?? new Date();
        this._updatedAt = updatedAt ?? new Date();
        this.validate();
    }

    // #region Getters and Setters

    get id(): EntityId {
        return this._id;
    }

    private set id(id: EntityId) {
        this._id = id;
    }

    get props(): BaseEntityProps & EntityPropsType {
        return Object.freeze({
            id: this.id,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            ...this._props,
        });
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    get updatedAt(): Date {
        return this._updatedAt;
    }

    // #endregion

    static isEntity(entity: unknown): entity is BaseEntity<unknown> {
        return entity instanceof BaseEntity;
    }

    equals(entity?: BaseEntity<EntityPropsType>): boolean {
        if (entity === undefined) {
            return false;
        }

        if (this === entity) {
            return true;
        }

        if (!BaseEntity.isEntity(entity)) {
            return false;
        }

        return this.id === entity.id;
    }

    protected abstract validate(): void;

    protected validateProps(props: EntityPropsType): void {
        if (props === undefined || props === null) {
            throw new Error("Entity props cannot be undefined or null");
        }
    }
}
