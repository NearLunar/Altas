import type { BaseEntity, EntityId } from "@/abstracts/base-entity";

export interface BaseRepository<Entity extends BaseEntity<unknown>> {
    create: (entity: Entity) => Promise<Entity>;
    update: (entity: Entity) => Promise<Entity>;
    delete: (entity: Entity) => Promise<Entity>;
    getById: (id: EntityId) => Promise<Entity | undefined>;
    getAll: () => Promise<Entity[]>;
}
