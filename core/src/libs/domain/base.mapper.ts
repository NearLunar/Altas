import type { BaseEntity } from "./base.entity";

export interface BaseMapper<
    DomainEntity extends BaseEntity<unknown>,
    PersistenceEntity,
    ResponseDTO = unknown,
> {
    toDomain: (entity: PersistenceEntity) => DomainEntity;
    toPersistence: (entity: DomainEntity) => PersistenceEntity;
    toDTO: (entity: DomainEntity) => ResponseDTO;
}
